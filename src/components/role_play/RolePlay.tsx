import { RolePlayProps } from "../../constants/types/components_props/types"
import { StyledRolePlay } from "./RolePlay.style"

export const RolePlay = ({level, points}: RolePlayProps) => {

    return (
    
        <StyledRolePlay>

            <p tabIndex={0}>Slang points: {points}</p>
            <p tabIndex={0}>Current level: {level}</p>

        </StyledRolePlay>

    )
    
}
