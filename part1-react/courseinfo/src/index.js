import React from 'react'
import ReactDOM from 'react-dom'

/**
 * const Title= ({course})=> <h1>{course}</h1>
 * 
 */
const Title= (props)=>{
  
  return <h1>{props.course}</h1>
}
const Paco= (props)=> <h1>{props.part1} {props.exercises1}</h1>

const Pepe= (props)=>{
  
  return <h1>{props.part2} {props.exercises2}</h1>
}
const Suma1= (props)=>{
  return <h4>Number of excercises {props.exercises1+props.exercises2+props.exercises3}</h4>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}></Title>
      <Paco part1={part1} exercises1={exercises1}></Paco>
      <Pepe part2={part2} exercises2={exercises2}></Pepe>
      <p>
        {part3} {exercises3}
      </p>
      <Suma1 exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Suma1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))