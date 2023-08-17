const Content = (props) =>{
  return (
    <div>
      <Part parts = {props.parts[0]} />
      <Part parts = {props.parts[1]}/>
      <Part parts = {props.parts[2]}/>
    </div>
  )
};

const Part = (props) =>{
  return(
    <div>
      <p>{props.parts.name + ' ' + props.parts.exercises}</p>
    </div>
  );
  
}

const Header = (props) => {
  return (<h1>{props.course}</h1>);

};

const Total = (props) =>{
  return (<>Number of exercises: {props.total}
  
  </>);
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts= {course.parts}/>
      <Total total = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}  />
    </div>
  )
}

export default App