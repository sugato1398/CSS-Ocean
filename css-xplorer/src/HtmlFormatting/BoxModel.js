import React from 'react'
import './BoxModel.css'


function BoxModel() {
  return (
    <div>
        <h1> Exploring the Box Model</h1>
        <div className='flex-cemter'>
            <p>Consider the box below</p>
            <div className='sample-box Coral margin-align'></div>
            <p> it is made up of multiple layers</p>
            <div className='margin-align'>
            <div className='sample-box Coral border-8 margin-8 padding-8'></div>
            </div>
            
        </div>
    </div>
  )
}

export default BoxModel