import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Looks like it's time for you to sober up buddy!</h1>
        <Link to='/' className='btn btn-primary'>
          Back to home page
        </Link>
      </div>
    </section>
  )
}

export default Error
