/* eslint-disable no-new-func */
import React, {useState} from "react";
import "../styles/calculator.css";
import Button from "./Button";

const Calculator = () => {

  const [res , setRes] = useState("")
  const button =["Clr","Del","/","7","8","9","*","6","5","4","+","3","2","1","-","0",".","="];

 const findVal = ()=>{
  let result = Function("return "+ res)()
  console.log(result)
  setRes(result.toString())
 }

  const handler = (arg)=>{
    console.log(arg)
    if(res==="Infinity"){
      setRes("");
      return;
    }
    if(arg=== "Clr") setRes("");
    
    else if(arg === "=") findVal();
    else if(arg === "Del"){
      let n = res.length;
      if(n>0)
      setRes(res.slice(0,n-1))
    }
    else setRes(res.concat(arg))
  }
  return (
    <div className="calculator">
      <div className="container">
        <div className="result">
          <div className="res-box">{res}</div>
          
          </div>
          <div className="btns">
            {button.map((ele,index)=> {
              return <Button handler={handler} value={ele} key={index}/>
            })}
          </div>
        </div>
      </div>
    
  );
};

export default Calculator;
