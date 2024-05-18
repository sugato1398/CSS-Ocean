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


{/* -------------------------------------  FLEX EXPERIMENTS WITH BOXES ------------------------------------------------------------- */}

            <h2> More Flex Experimentations </h2>

            <p> above examples were with anchor tags which were inline by default, now we will experiment with div tags which are block scoped usually</p>

            <div>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>

            <p> applying display flex on parent container , seems like all divs are inline now </p>
            <div className='flex'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>

            <p> trying different <code>justify content</code> combinations - justify-content deals with horizontal alignment by default</p>

            <p>using <code>justify-content: flex-start</code></p>
            <div className='flex justify-fl-start'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: flex-end</code></p>
            <div className='flex justify-fl-end'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: center</code></p>
            <div className='flex justify-center'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: space-around</code></p>
            <div className='flex justify-around'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: space-evenly</code></p>
            <div className='flex justify-evenly'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: space-between</code></p>
            <div className='flex justify-between'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: right</code></p>
            <div className='flex justify-right'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            

            <p>using <code>justify-content: left</code></p>
            <div className='flex justify-left'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
            <br/>
            <br/>
            
            <p> now time for some experiments  with <code>align-items</code> property --  it deals with alignment vertically</p>

            <p> lets have a centered box with varying heights</p>
            <div className='flex justify-center'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div>
            <br/>
            <br/>

            <p> lets have a border around the parent <code>div</code> to understand where things are going</p>
            <div className='flex justify-center parent'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div>
            <br/>
            <br/>

            <p>hmm, looks like an inverted histogram, let's apply the <code>align-items</code> magic</p>
            <p>applying <code>align-items:flex-start </code></p>
            <div className='flex justify-center align-fl-start parent'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div>
            <br/>
            <br/>

            <p>applying <code>align-items:flex-end </code></p>
            <div className='flex justify-center align-fl-end parent'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div> 
            <br/>
            <br/>

            <p>applying <code>align-items:baseline </code> - this basically brings all text in the same line , without content it doesnt really shine</p>
            <div className='flex justify-center align-baseline parent'>
                <div className='box5 pad-up-10'>TEXT1</div>
                <div className='box6 pad-up-30'>TEXT2-  ill just put a huge paragraph to really test the limits you know</div>
                <div className='box7 pad-up-10'>TEXT3</div>
                <div className='box8 pad-up-30'>TEXT4-some more text within box</div>
            </div> 
            <p> seems like it just aligns the first line and not the whole content centrally, well it floats my boat</p>
            <br/>
            <br/>

            <p>applying <code>align-items:center </code></p>
            <div className='flex justify-center align-center parent'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div> 
            <br/>
            <br/>

            <p>applying <code>align-items:stretch </code></p>
            <div className='flex justify-center align-stretch parent'>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>
                <div className='box8'></div>
            </div> 
            <br/>
            <br/>
            <p> Hmm, that did not stretch as expected, lets try to have some different boxes with some content inside</p>

            <div className='flex justify-center parent'>
                <div className='green'>ONE</div>
                <div className='yellow'>TWO</div>
                <div className='orange1'>THREE</div>
                <div className='blue'>FOUR</div>
            </div> 
            <br/>
            <br/>

            <p> lets increase the parent box height </p>
            <div className='flex justify-center parent height-100'>
                <div className='green'>ONE</div>
                <div className='yellow'>TWO</div>
                <div className='orange1'>THREE</div>
                <div className='blue'>FOUR</div>
            </div> 
            <br/>
            <br/>

            <p> I guess stretch is there by default , anyways</p>

            <p> Time to stretch them out <code>align-items:stretch </code></p>
            <div className='flex justify-center align-stretch parent height-100'>
                <div className='green'>ONE</div>
                <div className='yellow'>TWO</div>
                <div className='orange1'>THREE</div>
                <div className='blue'>FOUR</div>
            </div> 
            <br/>
            <br/>

            <p> So it seems div tags with explicit <code>height</code> cannot be stretched by default </p>
            <h3>For awesome insights for flex properties check this website</h3>
            <div className='bg-gray-900'><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className=''>FlexBox Guide</a></div>
            <br/>
            <br/>

            <div className='display-footer'> You Have reached the End of the Document</div>
        </div>
      )
}

export default DisplayXplore