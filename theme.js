import React from "react";
import RemoteControl from "mdx-deck-remote-control";
const black = "#000000";
const baseTheme = {
  font: "system-ui, sans-serif",
  monospace: "Menlo, monospace",

  colors: {
    text: "#FFFFFF",
    background: "white",
    link: "#07c",
    pre: "#f0f",
    preBackground: "#333",
    code: "#f0f"
  },
  css: {
    fontSize: "16px",
    textAlign: "center",
    "@media screen and (min-width:56em)": {
      // fontSize: '32px',
    },
    "@media screen and (min-width:64em)": {
      // fontSize: '48px',
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    }
  },
  pre: {
    textAlign: "left",
    fontSize: "22px"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  }
};
const theme = {
  ...baseTheme,
  font: '"Roboto Condensed", system-ui, sans-serif',
  weights: [400, 700],
  monospace: '"Roboto Mono", monospace',
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono",
  colors: {
    text: "#0D1117",
    background: black,
    link: "#333",
    pre: black,
    preBackground: "#0D1117",
    code: black,
    codeBackground: "#0D1117"
  },
  heading: {
    fontWeight: "normal",
    fontSize: 72
  },
  blockquote: {
    fontWeight: 700
  },
  pre: {
    textAlign: "left"
  },
  svg: {
    margin: "30px"
  },
  Slide: {
    // borderLeft: '1px solid #0D1117',
    "& svg": {
      margin: "50px"
    }
  },
  css: {
    "#root": {
      border: "20px solid black"
    }
  }
};

console.log("Hi")
const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: "fixed",
        right: 0,
        bottom: 0,
        margin: 16
      }}
    >
    </div>
    <RemoteControl
      next={props.next}
      previous={props.previous}
      goto={props.goto}
      url="wss://sirtitles-server.herokuapp.com"
      path="/slides/slide-deck-1"
    />
  </div>
);

export default {
  Provider,
  ...theme
};
