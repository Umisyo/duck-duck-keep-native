import React, { FC } from 'react'
import { View, Button } from 'react-native'
import Memo from '../../Memo'

interface MemoListComponentProps {
  memoTextArray: string[]
  addMemo: () => void
  changeText: (index: number) => (text: string) => void
  decrement: (index: number) => () => void
}

const MemoListComponent: FC<MemoListComponentProps> = prop => (
  <View>
    <View>
      {prop.memoTextArray.map((memoText, index) => (
        <Memo
          key={index}
          memoText={memoText}
          changeText={prop.changeText(index)}
          decrement={prop.decrement(index)}
        />
      ))}
    </View>
    <Button title="+" onPress={prop.addMemo} />
  </View>
)

export default MemoListComponent
