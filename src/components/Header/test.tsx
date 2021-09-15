import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('Should render the footer', () => {
    const { container } = render(<Header />)

    expect(screen.getByText(/Blog/i)).toBeInTheDocument()
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
