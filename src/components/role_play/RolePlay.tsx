import { RolePlayProps } from "../../constants/types/components_props/types"

export const RolePlay = ({level, points}: RolePlayProps) => {

    return (
    
        <div>

            <div>Total points earned: {points}</div>
            <div>Current level: {level}</div>

        </div>

    )
    
}
