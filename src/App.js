import React from "react";
import './App.css';
import ClassCounter from "./components/ClassCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import ClassIntervalCounter from "./components/ClassIntervalCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import FunctionalCounterFour from "./components/FunctionalCounterFour";
import FunctionalCounterThree from "./components/FunctionalCounterThree";
import FunctionalCounterTwo from "./components/FunctionalCounterTwo";
import FunctionalIntervalCounter from "./components/FunctionalIntervalCounter";
import UseEffectClass from "./components/UseEffectClass";
import UseEffectClassTwo from "./components/UseEffectClassTwo";
import UseEffectDataFetch from "./components/UseEffectDataFetch";
import UseEffectFunctional from "./components/UseEffectFunctional";
import UseEffectFunctionalThree from "./components/UseEffectFunctionalThree";
import UseEffectFunctionalTwo from "./components/UseEffectFunctionalTwo";

function App() {
  return (
    <div className="App">

        {/* useState */}
      <ClassCounter />
      <FunctionalCounter />
      <FunctionalCounterTwo />
      <ClassCounterTwo />
      <FunctionalCounterThree />
      <FunctionalCounterFour />

        {/* useEffect */}
      {/* <UseEffectClass /> */}
      {/* <UseEffectFunctional />
      <UseEffectClassTwo />
      <UseEffectFunctionalTwo /> */}
      <UseEffectFunctionalThree />

        {/* Interval Counter   */}
      <ClassIntervalCounter />
      <FunctionalIntervalCounter />

        {/* data fetching */}
      <UseEffectDataFetch /> 

    </div>
  );
}

export default App;




// Notes:
// 1. Usestate will not merge the state automatically(we can do it manually though) but, setstate will merge the state automatically 
//         [ here class components > functional components  (refer to: FunctionalCounterThree.js) ]
// use spread operator (...)