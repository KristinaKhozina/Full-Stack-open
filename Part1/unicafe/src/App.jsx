import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsRow = ({text, value}) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
)

const StatisticsTable = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    const all = good + bad + neutral
    const average = (good - bad) / all
    const positivePercentage = good / all * 100

    return (
      <table>
        <tbody>
          <StatisticsRow text='good' value={good} />
          <StatisticsRow text='neutral' value={neutral} />
          <StatisticsRow text='bad' value={bad} />
          <StatisticsRow text='all' value={all} />
          <StatisticsRow text='average' value={average} />
          <StatisticsRow text='positive' value={positivePercentage + ' %'} />
        </tbody>
      </table>
    )
  }
  return (<p>No feedback given</p>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleBtnClick = (setFunc, setValue) => () => {
    setFunc(setValue)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleBtnClick(setGood, good + 1)} text='good'/>
      <Button handleClick={handleBtnClick(setNeutral, neutral + 1)} text='neutral' />
      <Button handleClick={handleBtnClick(setBad, bad + 1)} text='bad' />
      <h2>statistics</h2>
      <StatisticsTable good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App