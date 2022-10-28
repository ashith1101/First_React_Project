// import PropTypes from 'prop-types'
import Feedbackitem from '../Feedbackitem'
import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ }) {   //destrucing the prop
  const {feedback}= useContext(FeedbackContext)
  
  if(!feedback || feedback.length===0)
    return <p>"No Feedback Yet</p>
  
    return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div key={item.id} initial={{opacity:0}}  animate={{opacity:1}} exit={{opacity:0}}>
          <Feedbackitem key={item.id} item={item} 
          />
        </motion.div>
      ))}
      </AnimatePresence>
      
    </div>
  )
}

// FeedbackList.prototype={
//   feedback:PropTypes.arrayOf(
//     PropTypes.shape({
//       id:PropTypes.number.isRequired,
//       text:PropTypes.string.isRequired,
//       rating:PropTypes.number.isRequired

//     })
//   )
// }

export default FeedbackList