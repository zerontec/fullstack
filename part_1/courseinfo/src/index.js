import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>  <h1>{course}</h1>


const Content= (props) => {

return(
  <div>
  <p>Part 1 {props.part1}, {props.excercises1} </p>
  <p>Part 2 {props.part2}, {props.excercises2} </p>
  <p>Part 3 {props.part3}, {props.excercises3} </p>
  
</div>)
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
      <Header course={course}/>
      
      <Content  part1= {part1} excercises1={exercises1}
                part2 = {part2} excercises2 = {exercises2}
                part3 = {part3} excercises3= {exercises3} />
        
     
   
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

