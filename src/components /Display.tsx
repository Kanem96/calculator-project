import { FunctionComponent } from 'react'

interface DisplayProps {
    calculation: string
}

const Display: FunctionComponent<DisplayProps> = ({calculation}) => {
  return (
    <div className='display'>{calculation}</div>
  )
}

export default Display