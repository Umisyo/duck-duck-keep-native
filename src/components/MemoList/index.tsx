import React, { FC, useState } from 'react'
import MemoListComponent from './component'

const MemoList: FC = () => {
  const [memoTextArray, setMemoTextArray] = useState<string[]>([''])

  const addMemoText = () => {
    const newMemoTextArray: string[] = [...memoTextArray, '']
    setMemoTextArray(newMemoTextArray)
  }

  const createChangeText = (index: number) => {
    const changeText = (text: string) => {
      const newMemoText = text
      const newMemoTextArray: string[] = [
        ...memoTextArray.slice(0, index),
        newMemoText,
        ...memoTextArray.slice(index + 1),
      ]
      setMemoTextArray(newMemoTextArray)
    }

    return changeText
  }

  const decrement = (index: number) => {
    const decrementArray = () => {
      const newMemoTextArray: string[] = [
        ...memoTextArray.slice(0, index),
        ...memoTextArray.slice(index + 1),
      ]
      setMemoTextArray(newMemoTextArray)
    }

    return decrementArray
  }

  return (
    <MemoListComponent
      memoTextArray={memoTextArray}
      addMemo={addMemoText}
      changeText={createChangeText}
      decrement={decrement}
    />
  )
}

export default MemoList
