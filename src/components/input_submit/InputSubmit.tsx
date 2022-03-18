import { InputSubmitProps } from "../../constants/types/components_props/types"
import { StyledInputSubmit } from "./InputSubmit.style"

export const InputSubmit = ({submitAnswer, setAnswer}: InputSubmitProps) => {

    return (
      
        <StyledInputSubmit>
        
            <input type="text" placeholder='Type the word to find' name="answer" aria-label="Word to find"
                onChange={event => setAnswer(event.target.value)}/>
                
            <button onClick={submitAnswer} aria-labelledby="Submit answer">Submit answer</button>
            
        </StyledInputSubmit>
        
    )
    
}
