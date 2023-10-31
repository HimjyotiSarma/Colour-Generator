import { useState } from 'react'
import Colors from './Colors'
import Forms from './Forms'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10))
      toast.success(`Added ${color}`)
    } catch (error) {
      toast.error(`Could not add ${color} due to ${error.message}`)
    }
  }

  return (
    <main>
      <Forms addColor={addColor} />
      <Colors colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
