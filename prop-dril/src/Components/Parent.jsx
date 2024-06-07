import Child from "./Child"


const Parent = () => {

    const handleClick=()=>{
        console.log("buttonclick");
    }
  return (
    <div className="box">
        <h2>Parent-Component</h2>
        <Child  handleClick={handleClick}/>
    
    </div>
  )
}

export default Parent
