import { render } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('Should render the footer', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
