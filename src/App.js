import React from "react";
import './App.css';
import ClassCounter from "./components/ClassCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalCounterFour from "./components/FunctionalCounterFour";
import FunctionalCounterThree from "./components/FunctionalCounterThree";
import FunctionalCounterTwo from "./components/FunctionalCounterTwo";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <FunctionalCounter />
      <FunctionalCounterTwo />
      <ClassCounterTwo />
      <FunctionalCounterThree />
      <FunctionalCounterFour />
    </div>
  );
}

export default App;




// Notes:
// 1. Usestate will not merge the state automatically(we can do it manually though) but, setstate will merge the state automatically 
//         [ here class components > functional components  (refer to: FunctionalCounterThree.js) ]
// use spread operator (...)