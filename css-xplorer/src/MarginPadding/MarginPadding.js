import React from 'react'
import './MarginPadding.css'
function MarginPadding() {
  return (
    <div>
        <h1> Just some basic margin padding experience</h1>
        <br/>
        <br/>
         
        Consider the below element blocks as reference
        <div >
            <div className='FireBrick parent-block'>
                <div className='DarkSalmon flex-fill'>content 1</div>
                <div className='MediumSlateBlue flex-fill'>content 2</div>
            </div>
            <div className='SlateGray parent-block'>
                <div className='OrangeRed '>Some weird Content again</div>
            </div>
            
        </div>
        <br/>
        <br/>

        <b>Margin</b> is the space outside an element , so lets provide a margin around all these contents
        <div >
            <div className='FireBrick parent-block'>
                <div className='DarkSalmon flex-fill margin-all'>content 1</div>
                <div className='MediumSlateBlue flex-fill margin-all'>content 2</div>
            </div>
            <div className='SlateGray parent-block'>
                <div className='OrangeRed margin-all '>Some weird Content again</div>
            </div>
            
        </div>
        So a margin provides spaces around the element as shown by the content blocks above -  the background block emerges as we provide the margins
        <br/>
        <br/>

        A <b>padding</b> provides space within an element
        <div >
            <div className='FireBrick parent-block'>
                <div className='DarkSalmon flex-fill padding-all'>content 1</div>
                <div className='MediumSlateBlue flex-fill padding-all'>content 2</div>
            </div>
            <div className='SlateGray parent-block'>
                <div className='OrangeRed padding-all '>Some weird Content again</div>
            </div>
            So here you can witness that the content blocks bloated up as they had to accomodate the padding within the element , and the background color of the first block (red) doesnt appear again
        </div>
        <br/>
        <br/>
        Use this information to apply margin or padding accordingly - eg you need the background color to fill up or to separate a block from another
    </div>
  )
}

export default MarginPadding