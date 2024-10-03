import Header from "./components/Header";
import Counter from "./topics/states/Counter";
import StatesInFBC from "./topics/states/StatesInFBC";
import StatesInCBC from "./topics/states/StatesInCBC"
import PropsParent from "./topics/props/PropsParent";


function App() {
  return (
    <>
    <StatesInFBC></StatesInFBC>
    <Header/>
    <Counter></Counter>
    <StatesInCBC></StatesInCBC>
    <PropsParent></PropsParent>
    </>
  )
}

export default App;

//!class based components
// import { Component } from "react";
//  class App extends Component {
//   render(){
//     return <h1> I am class based components</h1>
//   }
//  }
//  export default App;
  