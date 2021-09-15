import { render } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('Should render the footer', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
