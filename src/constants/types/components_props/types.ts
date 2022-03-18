export type RolePlayProps = {
    level: number,
    points: number
}

export type InputSubmitProps = {
    submitAnswer: () => Promise<void>,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
} 

export type ScreenResultProps = {
    feedbackMessage: string
}

export type LetterPoolProps = {
    unorderedLetters: string[]
}   