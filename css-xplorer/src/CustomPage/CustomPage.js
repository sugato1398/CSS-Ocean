import React from 'react'
import './CustomPageStyle.css'
import background_img from '../images/background.png';
import { ReactComponent as Logo} from '../images/multiple-defenses.svg';

function CustomPage() {
  return (
    <div>
        <header className=' flex justify-between header-pad header-layout' >
            <div className='flex justify-center items-center'>
                
                <h1 className='RoyalBlue logo-spacing'>
                <Logo height={60} width={60} />
                LOGOZONE</h1>
                <a href="" className='item-pad no-underline'>Pricing</a>
                <a href="" className='item-pad no-underline'>Courses</a>
                <a href="" className='item-pad no-underline'>Blog</a>
                <a href="" className='item-pad no-underline'>Forum</a>
            </div>
            <div className='flex justify-center items-center'>
                <a href="" className='item-mar no-underline' >Login</a>
                <button className='item-mar button-css'>SIGN UP</button>
            </div>
        </header>
        <section className='section-layout'>
            <img src={background_img} className='image-style object-cover' alt="" ></img>
            <div className='text-box'>
                <h1 className='content-style text-white'>Turbocharge Your <span className='teal-text'>Development Career</span></h1>
                <p className='text-white'>Not really , there is just pain and suffering, at most you will be crying yourself to bed</p>
                <button className='get-started-bt'>Get Started</button>
            </div>
        </section>
        
    </div>
  )
}

export default CustomPage