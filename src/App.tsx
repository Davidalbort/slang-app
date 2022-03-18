import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import { InputSubmit } from './components/input_submit/InputSubmit';
import { LetterPool } from './components/letter_pool/LetterPool';
import { RolePlay } from './components/role_play/RolePlay';
import { ScreenResult } from './components/screen_result/ScreenResult';
import { exerciseAudioUrlState, exerciseDataState, exerciseIdState, exerciseLetterPoolState } from './recoil/atoms/exercise-data';
import { _getSlangServiceData, _postSlangServiceData } from './services/slang.service';

function App() {

  const [exerciseData, setExerciseData] = useRecoilState<object>(exerciseDataState)
  const [exerciseAudioUrl, setExerciseAudioUrl] = useRecoilState<string>(exerciseAudioUrlState)
  const [exerciseId, setExerciseId] = useRecoilState<number>(exerciseIdState)
  const [exerciseLetterPool, setExerciseLetterPool] = useRecoilState<string[]>(exerciseLetterPoolState)
  const [answer, setAnswer] = useState<string>('')
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [totalPoints, setTotalPoints] = useState<number>(0)

  useEffect(() => {

    (async () => {
        
      const data = await _getSlangServiceData()
      setExerciseData(data)
      setExerciseAudioUrl(data['audio-url'])
      setExerciseId(data['id'])
      setExerciseLetterPool(data['letter-pool'])

    })()
  
  }, [setExerciseData, setExerciseAudioUrl, setExerciseId, setExerciseLetterPool, questionNumber])
  
  const submitAnswer = async () => {

    const response = await _postSlangServiceData({ id: exerciseId, answer })
    
    setQuestionNumber(questionNumber + 1)
    response.correct ? setTotalPoints(totalPoints + 500) : setTotalPoints(totalPoints + 200)


  } 

  
  return (

    <div className="App">

      <RolePlay level={questionNumber} points={ totalPoints }/>
      <ScreenResult copy={ exerciseAudioUrl }/>
      <LetterPool unorderedLetters={ exerciseLetterPool }/>
      <InputSubmit setAnswer={ setAnswer } submitAnswer={ submitAnswer }/>
      
    </div>

  )
  
}

export default App;
