import React from "react"
import { render, screen } from "@testing-library/react"
import { LetterPool } from "./LetterPool"


it("should render same value passed into unorderedLetters prop", () => {

    const MOCK_LETTERS = ["S", "L", "A", "N", "G"]
    const EXPECTED_LETTERS = /SLANG/i

    render(<LetterPool unorderedLetters={MOCK_LETTERS} />)
    const pElement = screen.getByText(EXPECTED_LETTERS)
    expect(pElement).toBeInTheDocument()
    
})


