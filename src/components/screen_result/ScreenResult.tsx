import { ScreenResultProps } from "../../constants/types/components_props/types"
import { StyledScreenResult } from "./ScreenResult.style"

export const ScreenResult = ({ feedbackMessage, isCorrectAnswer, level }: ScreenResultProps) => {

    return (
      
        <StyledScreenResult tabIndex={0}>

            <h2>Information</h2>

            <p>{feedbackMessage}</p>

            <p className={level > 1 && isCorrectAnswer ? 'correct' :
                          level > 1 && !isCorrectAnswer ? 'incorrect' : ''}>

                {level > 1 && isCorrectAnswer ? '\u2713 Correct : continue like this' :
                 level > 1 && !isCorrectAnswer ? '\u2715 Incorrect : keep trying' : null}

            </p>

        </StyledScreenResult>
        
    )
    
}
