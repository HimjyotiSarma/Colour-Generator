import { toast } from 'react-toastify'

export default function SingleColor({ color, index }) {
  const { hex, weight } = color
  const clipboardRead = async (e) => {
    try {
      await navigator.clipboard.writeText(`#${hex}`)
      toast.success(`#${hex} copied to clipboard`)
    } catch (error) {
      toast.error(`Could not copy ${hex} due to ${error.message}`)
    }
  }
  return (
    <article
      className={index >= 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      key={index}
      onClick={clipboardRead}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}
