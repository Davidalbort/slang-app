import React from "react"
import { RolePlay } from "./RolePlay"
import { render, screen } from "@testing-library/react"


it("should render same value passed into level prop", () => {

    const MOCK_LEVEL = 5
    const EXPECTED_LEVEL = /5/i

    render(<RolePlay level={MOCK_LEVEL} />)
    const pElement = screen.getByText(EXPECTED_LEVEL)
    expect(pElement).toBeInTheDocument()
    
})

it("should render same value passed into points prop", () => {

    const MOCK_POINTS = 1200
    const EXPECTED_POINTS = /1200/i

    render(<RolePlay points={MOCK_POINTS} />)
    const pElement = screen.getByText(EXPECTED_POINTS)
    expect(pElement).toBeInTheDocument()
    
})


