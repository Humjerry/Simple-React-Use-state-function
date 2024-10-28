import "./App.css";
import Banner from "./components/banner";
import CardCopy from "./components/cardcopy";
import Btn from "./components/button";
import React from "react";

function App() {
  const [loginStatus, setLoginstatus] = React.useState(false);
  const [age, setAge] = React.useState(null);
  return (
    <>
    {
     loginStatus && <div className="card-wrapper" >
        <Banner />
        <CardCopy content={"Come in"} />

        <p>
          I invite you specially so you can experience the simplicity in luxury
        </p>
        {/* <div className="allbtn">
           <Btn content={"Good Bye"} /> 
        </div> */}
          </div>}
        <Btn
          content={loginStatus ? "Good Bye" : "Come In"}
          action={() => setLoginstatus(!loginStatus)}
        />
       {!loginStatus && <div className="welcome">
          <p className="text-yellow-600 font-bold">
            Great! take your time to explore this one time opportunity of great
            grace. have fun at the fantasy cloud palace.
          </p>
        </div>}
    </>
  );
}

export default App;
