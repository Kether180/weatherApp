import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { App } from "./App"

describe( "App", () => {
  it( "Renders Component According To Snapshot", () => {
    const { container } = render( <App /> )
    
    expect( container ).toMatchSnapshot() } )

  it( "Checks Input Functionality", () => {
    render( <App /> )

    userEvent.type( screen.getByRole( "search" ), "Copenhagen" )
    expect( screen.getByRole( "search" ) ).toHaveValue( "Copenhagen" ) } ) } )