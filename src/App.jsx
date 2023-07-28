import logo from "./logo.svg";
import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Questions from "./Components/Questions";
import Timer from "./Components/Timer";
import { data } from "./data/questions.js";
import Start from "./Components/Start";
function App() {
  const [username,setUsername] = useState(null)
  const [questionnumber, setQuestionnumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [questions,setQestions] = useState(data)
  const [earned, setEarned] = useState("₹ 0");
  const [answered,setAnswered] = useState(false)

  const list = useMemo(()=>
    [
      { id: 1, amount: "₹ 1000" },
      { id: 2, amount: "₹ 2000" },
      { id: 3, amount: "₹ 4000" },
      { id: 4, amount: "₹ 8000" },
      { id: 5, amount: "₹ 16,000" },
      { id: 6, amount: "₹ 32,000" },
      { id: 7, amount: "₹ 64,000" },
      { id: 8, amount: "₹ 1,28,000" },
      { id: 9, amount: "₹ 2,00,000" },
      { id: 10, amount: "₹ 2,50,000" },
      { id: 11, amount: "₹ 5,00,000" },
      { id: 12, amount: "₹ 7,50,000" },
      { id: 13, amount: "₹ 8,00,000" },
      { id: 14, amount: "₹ 9,00,000" },
      { id: 15, amount: "₹ 10,00,000" },
    ].reverse(),
  
[])
  
  useEffect(()=>{
    questionnumber >1 && setEarned(list.find((e)=>e.id===questionnumber-1 ).amount)
  },[questionnumber])
  return (
    <div className="App">
      {username ? (
        <>
         <div className="main">
        {stop ? (
          <h1 className="endText">You Earned:{earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">{<Timer setStop={setStop} answered={answered}setAnswered={setAnswered} questionnumber={questionnumber}/>}</div>
            </div>
            <div className="bottom">
              <Questions
                questionnumber={questionnumber}
                data={data}
                setStop={setStop}
                setQuestionnumber={setQuestionnumber}
                setAnswered={setAnswered}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {list.map((e) => (
            <li
              className={
                questionnumber === e.id ? "moneyitems active" : "moneyitems"
              }
            >
              <span className="question-number">{e.id}</span>
              <span className="moneyprice">{e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ):<Start setUsername={setUsername}/>}
     
    </div>
  );
}

export default App;
