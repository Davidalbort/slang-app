import { RolePlayProps } from "../../constants/types/components_props/types"
import { StyledRolePlay } from "./RolePlay.style"

export const RolePlay = ({level, points}: RolePlayProps) => {

    return (
    
        <StyledRolePlay>

            <div>Slang points: {points}</div>
            <div>Current level: {level}</div>

        </StyledRolePlay>

    )
    
}
