import React, { FC } from 'react'
import MemoComponent from './component'

interface MemoProps {
  memoText: string
  changeText: (text: string) => void
  decrement: () => void
}

const Memo: FC<MemoProps> = prop => (
  <MemoComponent
    memoText={prop.memoText}
    changeText={prop.changeText}
    decrement={prop.decrement}
  />
)

export default Memo
