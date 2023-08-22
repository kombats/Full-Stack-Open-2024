import { useState } from 'react'

const Feedback = () => {
  return (
    <h2>give feedback</h2>
  )
}

const FeedBackButton = ({goodClick, neutalClick, badClicks}) =>{
  return (
    <div>
      <button onClick={goodClick}>good</button>
      <button onClick={neutalClick}>neutral</button>
      <button onClick={badClicks}>bad</button>
    </div>
  )
}

const Statistic = () => {
  return(
    <div>
      <h2>statistic</h2>
    </div>
  )
}

const Rate = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad ===0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      good {good}<br/>
      neutal {neutral}<br/>
      bad {bad}<br/>
      all {bad + neutral + good}<br/>
      average {(good - bad)/(good + neutral + bad)}<br/>
      postive {(good/(good + neutral + bad) * 100)} %<br/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () =>{
    setGood(good + 1)
  } 

  const neutalClick = () =>{
    setNeutral(neutral + 1)
  }
  
  const badClicks = () =>{
    setBad (bad + 1)
  }
  
  return (
    <div>
      <Feedback  />
      <FeedBackButton goodClick = {goodClick} neutalClick = {neutalClick} badClicks = {badClicks}/>
      <Statistic />
      <Rate good ={good} neutral = {neutral} bad ={bad}/>
    </div>
  )
}

export default App