import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPages() {
  return <Card>
    <div className='about'>
        <h1>About this Project</h1>
        <p>
            This is a React app to leave a feedback for a product or service
        </p>
        <p>Version: 1.1.0</p>
        <Link to='/'>Back to Home</Link>
    </div>
  </Card>
}

export default AboutPages