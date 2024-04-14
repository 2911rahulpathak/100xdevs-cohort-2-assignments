import { useState } from "react"

//we have component called App
function App() {
  //define state variable
  const [count,setCount] = useState(0); //wont watch the state

  

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//Define our own button component which will take count & setCount take state as input
//It can take state variables as input
function CustomButton(props){

  function counting(){
    props.setCount(props.count+1);
  }

  return(
    <div>
      <button onClick={counting}>
        Counter {props.count}
      </button>
    </div>
  )
}


export default App


/* 
We can have many sub child components
The parent component can render the child component
*/