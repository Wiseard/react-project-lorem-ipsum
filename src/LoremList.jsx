import { nanoid } from 'nanoid'
import { Text } from './Text'

export const LoremList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((text) => {
        return <Text text={text} key={nanoid()} />
      })}
    </ul>
  )
}
