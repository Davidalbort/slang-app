import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import { ScreenResult } from './components/screen_result/ScreenResult';
import { exerciseAudioUrlState, exerciseDataState, exerciseIdState, exerciseLetterPoolState } from './recoil/atoms/exercise-data';
import { _getSlangServiceData } from './services/slang.service';

function App() {

  const [exerciseData, setExerciseData] = useRecoilState<object>(exerciseDataState)
  const [exerciseAudioUrl, setExerciseAudioUrl] = useRecoilState<string>(exerciseAudioUrlState)
  const [exerciseId, setExerciseId] = useRecoilState<number>(exerciseIdState)
  const [exerciseLetterPool, setExerciseLetterPool] = useRecoilState<string[]>(exerciseLetterPoolState)

  useEffect(() => {

    (async () => {
        
      const data = await _getSlangServiceData()
      setExerciseData(data)
      setExerciseAudioUrl(data['audio-url'])
      setExerciseId(data['id'])
      setExerciseLetterPool(data['letter-pool'])
        
    })()
  
  }, [setExerciseData, setExerciseAudioUrl, setExerciseId, setExerciseLetterPool])

  
  return (

    <div className="App">

      <ScreenResult />
      
    </div>

  )
  
}

export default App;
