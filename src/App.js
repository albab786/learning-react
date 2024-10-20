import Header from "./topics/components/Header";
import Counter from "./topics/states/Counter";
import StatesInFBC from "./topics/states/StatesInFBC";
import StatesInCBC from "./topics/states/StatesInCBC"
import PropsParent from "./topics/props/PropsParent";
import InlineCssExample from "./topics/reactCSS/InlineCssExample";
import Button from "./topics/components/button/Button";
import AmazonNavBar from "./topics/components/AmazonNavBar";

function App() {
  return (
    <>
    {/* <StatesInFBC></StatesInFBC>
    <Header/>
    <Counter></Counter>
    <StatesInCBC></StatesInCBC> */}
    {/* <PropsParent></PropsParent> */}
    {/* <InlineCssExample></InlineCssExample>
    <Button></Button> */}
    <AmazonNavBar></AmazonNavBar>
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
  