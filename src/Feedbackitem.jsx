import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./components/shared/Card"
import FeedbackContenxt from './context/FeedbackContext'

function Feedbackitem({item,handleDelete}) {
  // const [rating,setRating]=useState(7)
  // const [text,setText]=useState('This is an example of a feedback item')

//   const  handleClick=()=>{
//     setRating(
//         (prev)=>{
//             return prev+1
//         }
//     )
//   }


    const{deleteFeedback,editFeedback}=useContext(FeedbackContenxt)
    
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={()=>editFeedback(item)}  className='edit'>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">
            {item.text}
        </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

Feedbackitem.propTypes={
  item:PropTypes.object.isRequired
}

export default Feedbackitem