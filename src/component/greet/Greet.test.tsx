import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', () => {
  test('renders correctly',()=>{
    render(<Greet />)
    const testElement = screen.getByText(/hello/i)
    expect(testElement).toBeInTheDocument()
  })
  test('renders with name correctly',()=>{
    render(<Greet name="Vrushal" />)
    const testElement = screen.getByText(/hello Vrushal/i)
    expect(testElement).toBeInTheDocument()
  })
})
