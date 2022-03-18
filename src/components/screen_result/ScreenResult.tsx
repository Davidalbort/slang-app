import { ScreenResultProps } from "../../constants/types/components_props/types"
import { StyledScreenResult } from "./ScreenResult.style"

export const ScreenResult = ({ feedbackMessage }: ScreenResultProps) => {

    return (
      
        <StyledScreenResult>

            {feedbackMessage}

        </StyledScreenResult>
        
    )
    
}
