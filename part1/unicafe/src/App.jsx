import { useState } from 'react'
const Feedback = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const Button = ({text, onClick}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const StatisticResults = ({good,neutral,bad}) =>{
  return(
    <>
      good {good}<br/>
      neutral {neutral}<br/>
      bad: {bad}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback text="give feedback" />
      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button text="bad" onClick={() => setBad(bad+1)} />
      <Statistic text="statistics" />
      <StatisticResults good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App