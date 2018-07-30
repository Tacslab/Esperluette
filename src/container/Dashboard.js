import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "../components/Paper";

import svg from "svg.js";
import SVGHelper from "../helpers/svg";
import svgPath from "../polices/TYPO_MUS.svg";

class Dashboard extends Component {
  state = {
    letters: []
  };

  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
    this.containerRef = React.createRef();
  }

  //Temp for testing purpose
  async componentDidMount() {
    //fetch svg
    const result = await fetch(svgPath);
    const svgString = await result.text();

    var svgElt = document.createElement("div");
    const svgHelper = new SVGHelper(svgElt, svgString);
    const letters = await svgHelper.parseLetter({});

    var containerLetter = [];
    for (var letter of letters) {
      var divLetter = document.createElement("div");
      var svgLetter = new svg(divLetter);
      var group = svgLetter.group();
      var minX = letter.reduce((acc, elt) => {
        return elt.x() < acc ? elt.x() : acc;
      }, 100000);
      var minY = letter.reduce((acc, elt) => {
        return elt.y() < acc ? elt.y() : acc;
      }, 100000);

      for (var elt of letter) {
        elt.move(elt.x() - minX, elt.y() - minY);
        group.add(elt);
      }
      containerLetter.push({ divLetter, svgLetter, group });
    }
    this.setState({
      letters: containerLetter
    });
  }

  render() {
    const { letters } = this.state;

    const colors = [
      "#001f3f",
      "#0074D9",
      "#7FDBFF",
      "#39CCCC",
      "#3D9970",
      "#2ECC40",
      "#01FF70",
      "#FFDC00",
      "#FF851B",
      "#FF4136",
      "#85144b",
      "#F012BE",
      "#B10DC9",
      "#111111",
      "#AAAAAA",
      "#DDDDDD"
    ];
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <Grid item xs={6} style={{ height: "100%" }}>
          <div ref={this.containerRef} style={{ height: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          {letters.map(({ divLetter, svgLetter, group }, index) => {
            return (
              <div
                onClick={() => {
                  const child = this.containerRef.current.children[0];
                  console.log(this.containerRef.current);
                  const cloneLetter = divLetter.cloneNode(true);
                  const svgObj = svg.adopt(cloneLetter.children[0]);
                  if (child) {
                    this.containerRef.current.replaceChild(cloneLetter, child);
                  } else {
                    this.containerRef.current.append(cloneLetter);
                  }

                  svgObj
                    .children()
                    .forEach(child => child.scale(10, 10).translate(0, 0));
                }}
                key={index}
                style={{ padding: "10px", float: "left" }}
                ref={myRef => {
                  divLetter.style.height = "100%";
                  divLetter.style.width = "100%";
                  console.log(divLetter.style);
                  myRef.append(divLetter);

                  var bbox = group.bbox();
                  myRef.style.width = bbox.w + "px";

                  myRef.style.height = bbox.h + "px";
                  var rect = svgLetter.rect(bbox.w, bbox.h);
                  rect.x(bbox.x);
                  rect.y(bbox.y);
                  rect.attr({
                    fill: colors[index % 20],
                    "fill-opacity": 0.4
                  });
                }}
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
