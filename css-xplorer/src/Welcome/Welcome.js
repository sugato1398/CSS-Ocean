import React from 'react'
import {Link} from 'react-router-dom'
import './Welcome.css'


function Welcome() {
  return (
    
    <div className='bg-navy text-white'>
        <h1>Welcome to Css Ocean</h1>
        <div> select from the below topics freely </div>

        <table>
        <caption> Some Html blocks </caption>
            <tr>
                <td> <Link to='/divspan'>Div tags and spans</Link></td>
                <td> <Link to="/table">Html tables</Link></td>
                <td> <Link to="/marginpad">Margins and Padding</Link></td>
                <td> <Link to="/display">Display tag explorer</Link></td>
                <td> <Link to="/customPage">Custom Page</Link></td>
            </tr>
        </table>

        <table>
        <caption> CSS stuff </caption>
            <tr>
                <td> <Link to="/colorPage">Color Hell</Link> </td>
            </tr>
        </table>

        <h2> For CSS Battle Images Follow Below</h2>
        <Link to="/cssBattlefield">Field Playground</Link>
    </div>
  )
}

export default Welcome