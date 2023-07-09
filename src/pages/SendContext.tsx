import React ,{useContext} from 'react'
import { UserContext } from '../context/context'

const SendContext = () => {
    const context = useContext(UserContext);
    console.log(context.price , context.description);
  return (
    <div>
        
    </div>
  )
}

export default SendContext