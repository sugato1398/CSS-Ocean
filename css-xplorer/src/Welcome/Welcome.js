import React from 'react'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div>
        <h1>Welcome to Css Ocean</h1>
        
        <div> select from the below topics freely </div>

        <table>
        <caption> Some Html blocks </caption>
            <tr>
                <td> <Link to='/divspan'>Div tags and spans</Link></td>
                <td> <Link to="/table">Html tables</Link></td>
            </tr>
        </table>

        <table>
        <caption> CSS stuff </caption>
            <tr>
                <td> <Link to="/colorPage">Color Hell</Link> </td>
            </tr>
        </table>
    </div>
  )
}

export default Welcome