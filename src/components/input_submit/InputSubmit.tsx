import { useState } from "react"


export const InputSubmit = ({submitAnswer, setAnswer}:any) => {

    

    

    return (
      
        <div>
            <input type="text" placeholder='Type the word to find' onChange={e => setAnswer(e.target.value)}/>
            <button onClick={submitAnswer}>Submit answer</button>
        </div>
        
    )
    
}
