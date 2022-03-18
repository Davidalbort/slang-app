import { ScreenResultProps } from "../../constants/types/components_props/types"
import { StyledScreenResult } from "./ScreenResult.style"

export const ScreenResult = ({ feedbackMessage }: ScreenResultProps) => {

    return (
      
        <StyledScreenResult tabIndex={0}>

            <h2>Information</h2>
            <p>{feedbackMessage}</p> 

        </StyledScreenResult>
        
    )
    
}
