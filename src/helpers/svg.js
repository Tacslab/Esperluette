import svg from "svg.js";
import { Tooltip } from "../../node_modules/@material-ui/core";
import { tokensToFunction } from "../../node_modules/path-to-regexp";
import { withHandlers } from "recompose";
import { height } from "window-size";

class SVGHelper {
  constructor(svgElt, svgString) {
    console.log(svgElt);
    this.svg = new svg(svgElt);
    this.svg.svg(svgString);

    this.validChild = ["path", "polygon", "rect", "line"];
  }

  async getChildren(node) {
    let children = [];

    if (!node || node.length === 0) return children;

    children = await node.children();

    const childrenFilter = await Promise.all(
      children.map(async child => {
        let children = [];
        if (child.node.children.length > 0) {
          const subChild = (await this.getChildren(child)) || [];
          children = [...children, ...subChild];
        }

        if (this.validChild.indexOf(child.node.tagName) !== -1) {
          children.push(child);
        }

        return children;
      })
    );

    const childrenArray = childrenFilter.reduce((acc, child) => {
      return [...acc, ...child];
    }, []);

    return childrenArray;
  }

  collide(bbox1, bbox2, margeW, margeH) {
    if (
      bbox1.x - margeW <= bbox2.x2 &&
      bbox1.x2 + margeW >= bbox2.x &&
      bbox1.y - margeH <= bbox2.y2 &&
      bbox1.y2 + margeH >= bbox2.y
    ) {
      return true;
    }

    return false;
  }

  //TODO option custom
  async parseLetter({}) {
    let parts = await this.getChildren(this.svg);

    //Get width and height average
    const widthAverage =
      parts.reduce((acc, part) => {
        return acc + part.bbox().w;
      }, 0) / parts.length;
    const heightAverage =
      parts.reduce((acc, part) => {
        return acc + part.bbox().h;
      }, 0) / parts.length;

    let letters = [[parts.pop()]];
    while (parts.length > 0) {
      const result = parts.findIndex(part => {
        const found = letters.findIndex(letter => {
          return (
            letter.findIndex(elt => {
              return this.collide(
                part.bbox(),
                elt.bbox(),
                widthAverage / 5,
                heightAverage / 5
              );
            }) !== -1
          );
        });

        if (found !== -1) {
          letters[found].push(part);
        }

        return found !== -1;
      });

      if (result === -1) {
        const newPart = parts.pop();
        letters.push([newPart]);
      } else {
        parts.splice(result, 1);
      }
    }

    console.log(letters);
    return letters;
  }
}

export default SVGHelper;
