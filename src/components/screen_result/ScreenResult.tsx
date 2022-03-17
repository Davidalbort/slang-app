import { useRecoilValue } from 'recoil'
import { exerciseAudioUrlState } from '../../recoil/atoms/exercise-data'

export const ScreenResult = () => {

    const exerciseAudioUrl = useRecoilValue(exerciseAudioUrlState)
    

    return (
      
        <div>{exerciseAudioUrl}</div>
        
    )
    
}
