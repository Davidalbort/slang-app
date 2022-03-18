import React from "react"
import { ScreenResult } from "./ScreenResult"
import { render, screen } from "@testing-library/react"


it("should render same value passed into feedbackMessage prop", () => {

    const MOCK_MESSAGE = "the answer was correct"
    const EXPECTED_MESSAGE = /the answer was correct/i

    render(<ScreenResult feedbackMessage={MOCK_MESSAGE} />)
    const pElement = screen.getByText(EXPECTED_MESSAGE)
    expect(pElement).toBeInTheDocument()
    
})


