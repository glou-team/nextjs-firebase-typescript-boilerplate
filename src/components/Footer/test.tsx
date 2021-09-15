import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('Should render the footer', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText(/Powered by/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
