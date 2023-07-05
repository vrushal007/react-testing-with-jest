import { render,screen } from "../../test-utils";
import React from "react";
import { MuiMode } from "./Mui-mode";

describe('MuiMode',()=>{
  test('renders correctly',()=>{
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')

  })
})