import React from 'react'
import './DisplayXplore.css'

function DisplayXplore() {
    return (
        <div >
            Below is a div with some links - no CSS implemented
            <div id='default' className='bg-gray-900 text-white' >
                <div>
                    <a href="" >Pricing</a>
                    <a href="" >Courses</a>
                    <a href="" >Blog</a>
                    <a href="" >Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            Below  is div with display option as block for all, notice each link is in different rows
            <div id='disp-block' className='bg-gray-900'>
                <div>
                    <a href="" className='block'>Pricing</a>
                    <a href="" className='block'>Courses</a>
                    <a href="" className='block'>Blog</a>
                    <a href="" className='block'>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            Below  is div with display option as inline for all, notice each link takes only space of the text -  almost same as default behavior 
            <div id='disp-inline' className='bg-gray-900'>
                <div>
                    <a href="" className='inline'>Pricing</a>
                    <a href="" className='inline'>Courses</a>
                    <a href="" className='inline'>Blog</a>
                    <a href="" className='inline'>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            Below  is div with display option as inline-block for all, each link takes space provided only just like inline, but it allows for margins which only inline doesnt 
            <div id='disp-inline-block' className='bg-gray-900'>
                <div>
                    <a href="" className="inline-block margin-all">Pricing</a>
                    <a href="" className='inline-block margin-all'>Courses</a>
                    <a href="" className='inline-block margin-all'>Blog</a>
                    <a href="" className='inline-block margin-all'>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            Below  is div with display option as hidden for some , so yeah those are gone for good
            <div id='disp-inline-block' className='bg-gray-900'>
                <div>
                    <a href="" className=" ">Pricing</a>
                    <a href="" className='hidden'>Courses</a>
                    <a href="" className='hidden'>Blog</a>
                    <a href="" className=''>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            Now coming to the GODFATHER - flex , here we will apply justify-content ( which takes care of alignment horizontally by default) to parent container so all changes are applied to all children within it, note that it ignores any element within it with display as hidden, but considers any empty element ( note the weird space before Pricing , there's a useless anchor element wandering there)
            <div id='disp-inline-block' className='bg-gray-900'>
                <div className='flex justify-between'>
                    <a></a>
                    <a href="" className=" ">Pricing</a>
                    <a href="" className='hidden'>Courses</a>
                    <a href="" className=''>Blog</a>
                    <a href="" className='hidden'>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            But it ignores any child components defined with display as block (Thats weird)
            <div id='disp-inline-block' className='bg-gray-900'>
                <div className='flex justify-between'>
                    <a href="" className="block">Pricing</a>
                    <a href="" className='block'>Courses</a>
                    <a href="" className='block'>Blog</a>
                    <a href="" className='block'>Forum</a>
                </div>
            </div>
            <br/>
            <br/>

            So with just a single child it just aligns it to the extreme left (not a political move i'd recommend)
            <div id='disp-inline-block' className='bg-gray-900'>
                <div className='flex justify-between'>
                    <a href="" className="block">Pricing</a>
                </div>
            </div>

            <h3>For awesome insights for flex properties check this website</h3>
            <div className='bg-gray-900'><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className=''>FlexBox Guide</a></div>
        </div>
      )
}

export default DisplayXplore