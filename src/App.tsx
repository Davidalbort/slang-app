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
  const initialFeedBack = `• Play and listen the audio from below, then type the correct word, using the given letters`
  const laterFeedBack = `• NEW WORD !!! Play and listen the audio from below, then type the correct word, using the given letters`
  const [answerFeedback, setAnswerFeedback] = useState<string>(initialFeedBack)
  const [correctAnswer, setCorrectAnswer] = useState<boolean>()
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

      setCorrectAnswer(isCorrect)
      setAnswerFeedback(`The answer you submited was correct "${submitedWord}" was the hidden word`)


      setTimeout(() => {
        setAnswerFeedback(laterFeedBack)
        setTotalPoints(totalPoints + 500)
      }, 4000)

    }
    else {

      setCorrectAnswer(isCorrect)
      setAnswerFeedback(`The answer you submited was incorrect "${submitedWord}" wasn't the hidden word`)


      setTimeout(() => {
        setAnswerFeedback(laterFeedBack)
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

      <a href="https://slangapp.com/" target="_blank" rel="noreferrer" aria-label="Go to slang website">
        <img src={logo} alt='slang' tabIndex={0} />
      </a>
      <h1>Spelling exercises</h1>
      <RolePlay level={questionNumber} points={totalPoints} />
      <ScreenResult feedbackMessage={answerFeedback} isCorrectAnswer={correctAnswer} level={questionNumber}/>
      <ReactAudioPlayer src={exerciseAudioUrl} controls />

      <div className='separator'>
        <LetterPool unorderedLetters={ exerciseLetterPool }/>
        <InputSubmit setAnswer={setAnswer} submitAnswer={submitAnswer} />
      </div>  
      
    </StyledApp>
  )
  
}

export default App;
