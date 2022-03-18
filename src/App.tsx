import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import { InputSubmit } from './components/input_submit/InputSubmit';
import { LetterPool } from './components/letter_pool/LetterPool';
import { RolePlay } from './components/role_play/RolePlay';
import { ScreenResult } from './components/screen_result/ScreenResult';
import { exerciseAudioUrlState, exerciseDataState, exerciseIdState, exerciseLetterPoolState } from './recoil/atoms/exercise-data';
import { _getSlangServiceData, _postSlangServiceData } from './services/slang.service';
import ReactAudioPlayer from 'react-audio-player';

function App() {

  const [exerciseData, setExerciseData] = useRecoilState<object>(exerciseDataState)
  const [exerciseAudioUrl, setExerciseAudioUrl] = useRecoilState<string>(exerciseAudioUrlState)
  const [exerciseId, setExerciseId] = useRecoilState<number>(exerciseIdState)
  const [exerciseLetterPool, setExerciseLetterPool] = useRecoilState<string[]>(exerciseLetterPoolState)
  const [answer, setAnswer] = useState<string>('')
  const initialFeedBack = `Play and listen the audio from below, then type the correct word, using the given letters`
  const [answerFeedback, setAnswerFeedback] = useState<string>(initialFeedBack)
  const [questionNumber, setQuestionNumber] = useState<number>(1)
  const [totalPoints, setTotalPoints] = useState<number>(0)


  useEffect((): void => {

    (async (): Promise<void> => {
        
      const data = await _getSlangServiceData()
      setExerciseData(data)
      setExerciseAudioUrl(data['audio-url'])
      setExerciseId(data['id'])
      setExerciseLetterPool(data['letter-pool'])

    })()
  
  }, [setExerciseData, setExerciseAudioUrl, setExerciseId, setExerciseLetterPool, questionNumber])

  const validateAnswer = (submitedWord: string, isCorrect: boolean): void => {

    if (isCorrect) {
      setTotalPoints(totalPoints + 500)
      setAnswerFeedback(`The answer you submited was correct ${submitedWord} was the hidden word`)
    }
    else {
      setTotalPoints(totalPoints + 200)
      setAnswerFeedback(`The answer you submited was incorrect ${submitedWord} wasn't the hidden word`)
    }

  }
  
  const submitAnswer = async (): Promise<void> => {

    const response = await _postSlangServiceData({ id: exerciseId, answer })

    validateAnswer(answer, response.correct)
    
    setQuestionNumber(questionNumber + 1)

  } 

  
  return (

    <div className="App">

      <RolePlay level={questionNumber} points={totalPoints} />
      <ScreenResult feedbackMessage={ answerFeedback }/>
      <ReactAudioPlayer src={exerciseAudioUrl} controls />
      <LetterPool unorderedLetters={ exerciseLetterPool }/>
      <InputSubmit setAnswer={ setAnswer } submitAnswer={ submitAnswer }/>
      
    </div>

  )
  
}

export default App;
