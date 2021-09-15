import React from 'react'
import Link from 'next/link'

import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      <Link href="/blog">
        <a>Blog</a>
      </Link>{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </S.Container>
  )
}
