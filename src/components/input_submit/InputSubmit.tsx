import { InputSubmitProps } from "../../constants/types/components_props/types"

export const InputSubmit = ({submitAnswer, setAnswer}: InputSubmitProps) => {

    return (
      
        <div>
            <input type="text" placeholder='Type the word to find' onChange={event => setAnswer(event.target.value)}/>
            <button onClick={submitAnswer}>Submit answer</button>
        </div>
        
    )
    
}
