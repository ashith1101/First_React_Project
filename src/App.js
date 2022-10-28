// import React from "react"

// function App(){
//     const title='Blog Post'
//     const body='This is my blog post'
//     const comments=[
//         {id:1,text:'Comment One'},
//         {id:2,text:'Comment Second'},
//         {id:3,text:'Comment Three'},
//     ]

//     const loading=true
//     const showComments=true

//     const commentBlock=(
//         <div className="comments">
//         <h3>Comments ({comments.length})</h3>
//         <ul>
//             {comments.map((comment,index)=>(
//                 <li key={index}>{comment.text}</li>   //key inorder 
//             ))}
//         </ul>
//     </div>
//     )

//     if(loading) return <h1>Loading......</h1>

//     return(
//         <div className="container">
//             <h1>{title}</h1>
//             <p>{body}</p>

//             {showComments? commentBlock     //we can use && instead of ? if we dont want else if condition is false
       
//             :'No Comments'}

        
//         </div>
//     )
    
//     // return React.createElement('div',{className:'container'},
//     // React.createElement('h1',{},'My App'))
// }

// export  default App 
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'


import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"

import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPages from './pages/AboutPages'
import AboutIconsLink from './components/AboutIconsLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

  return ( 
    <FeedbackProvider>
      <Router>
          <Header />  

          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <FeedbackList/>

                </>
              }>
                    
                </Route>
              
                <Route path='/about'  element={<AboutPages/>}/>
            </Routes>
            <AboutIconsLink/>
          </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App