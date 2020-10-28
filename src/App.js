import React from "react";

import Global from "./styles/global";

import Home from "./pages/Home";

const exampleText =
  "Esse container é responsivo.";

const data = [
  {
    id: Math.random(),
    title: "Con1",
    text: exampleText,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Con2",
    text: exampleText,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Con3",
    text: exampleText,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Con4",
    text: exampleText,
    bgColor: "#9FEACD"
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;