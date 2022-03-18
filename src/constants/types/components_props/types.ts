export type RolePlayProps = {
    level: number,
    points: number
}

export type InputSubmitProps = {
    submitAnswer: () => Promise<void>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
} 

export type ScreenResultProps = {
    feedbackMessage: string,
    isCorrectAnswer?: boolean | undefined,
    level: number
}

export type LetterPoolProps = {
    unorderedLetters: string[]
}   