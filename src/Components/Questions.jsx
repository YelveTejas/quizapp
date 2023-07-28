import React, { useEffect, useState } from "react";
import "../app.css";
const Questions = ({ data, setStop, setQuestionnumber, questionnumber,setAnswered }) => {
  const [question, setQuestion] = useState(null);
  const [select, setSelect] = useState(null);
  const [classname,setClassName] = useState('answer')

  useEffect(() => {
    setQuestion(data[questionnumber - 1]);
  }, [data, questionnumber]);

  const delay = (duration,callback)=>{
    setTimeout(()=>{
      callback()
    },duration)
  }
  const handleClick = (a) => {
    console.log(a,'a')
    setAnswered(true)
    setSelect(a);
    setClassName('answer active')
    delay(2000,()=>{
      setClassName(a.correct ? 'answer correct':"answer wrong")
    })
    delay(6000,()=>{
      if(a.correct){
        setQuestionnumber((pre)=>pre+1)
        setSelect(null)
      }else{
        setStop(true)
      }
    })

    
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={select === a ? classname:"answer"} onClick={() => handleClick(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
