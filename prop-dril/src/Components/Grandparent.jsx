import { createContext } from "react"
import Parent from "./Parent"

export const GrandContext = createContext();


const Grandparent = () => {
    const data ="hello from Grandparent hari"
  return (<>
  <div className="box">
    <h2>Grandparent-Component</h2>
    <GrandContext.Provider value={data}> <Parent/></GrandContext.Provider>
    
   
    
    </div>
  </>
    
  )
}

export default Grandparent
