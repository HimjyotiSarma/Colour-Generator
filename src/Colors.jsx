import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

export default function Colors({ colors }) {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />
      })}
    </div>
  )
}
