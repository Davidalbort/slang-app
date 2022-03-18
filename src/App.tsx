import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { InputSubmit } from './components/input_submit/InputSubmit';
import { LetterPool } from './components/letter_pool/LetterPool';
import { RolePlay } from './components/role_play/RolePlay';
import { ScreenResult } from './components/screen_result/ScreenResult';
import { exerciseAudioUrlState, exerciseDataState, exerciseIdState, exerciseLetterPoolState } from './recoil/atoms/exercise-data';
import { _getSlangServiceData, _postSlangServiceData } from './services/slang.service';
import ReactAudioPlayer from 'react-audio-player';
import { StyledApp } from './App.style';
import logo from '../src/assets/images/Logo.png'

function App() {

  const [exerciseData, setExerciseData] = useRecoilState<object>(exerciseDataState)
  const [exerciseAudioUrl, setExerciseAudioUrl] = useRecoilState<string>(exerciseAudioUrlState)
  const [exerciseId, setExerciseId] = useRecoilState<number>(exerciseIdState)
  const [exerciseLetterPool, setExerciseLetterPool] = useRecoilState<string[]>(exerciseLetterPoolState)
  const [answer, setAnswer] = useState<string>('')
  const initialFeedBack = `* Play and listen the audio from below, then type the correct word, using the given letters`
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

      setAnswerFeedback(`The answer you submited was correct ${submitedWord} was the hidden word`)

      setTimeout(() => {
        setAnswerFeedback(initialFeedBack)
        setTotalPoints(totalPoints + 500)
      }, 4000)

    }
    else {

      setAnswerFeedback(`The answer you submited was incorrect ${submitedWord} wasn't the hidden word`)

      setTimeout(() => {
        setAnswerFeedback(initialFeedBack)
        setTotalPoints(totalPoints + 200)
      }, 4000)

    }

  }
  
  const submitAnswer = async (): Promise<void> => {

    const response = await _postSlangServiceData({ id: exerciseId, answer })

    validateAnswer(answer, response.correct)
    setTimeout(() => {setQuestionNumber(questionNumber + 1)}, 4000)

  } 

  
  return (

    <StyledApp>

      <a href="https://slangapp.com/"><img src={logo} alt='slang'/></a>
      <RolePlay level={questionNumber} points={totalPoints} />
      <ScreenResult feedbackMessage={ answerFeedback }/>
      <ReactAudioPlayer src={exerciseAudioUrl} controls />

      <div className='separator'>
        <LetterPool unorderedLetters={ exerciseLetterPool }/>
        <InputSubmit setAnswer={setAnswer} submitAnswer={submitAnswer} />
      </div>  
      
    </StyledApp>
  )
  
}

export default App;
