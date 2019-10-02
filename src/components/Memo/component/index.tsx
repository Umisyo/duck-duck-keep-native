import React, { FC } from 'react'
import { TextInput, View, Button } from 'react-native'

interface MemoComponentProps {
  memoText: string
  changeText: (text: string) => void
  decrement: () => void
}

const MemoComponent: FC<MemoComponentProps> = prop => (
  <View>
    <TextInput onChangeText={prop.changeText} value={prop.memoText} />
    <Button title="-" onPress={prop.decrement} />
  </View>
)

export default MemoComponent
