import React from 'react'

function HtmlTable() {
  return (
    <div>
        <h1> Just some tables below</h1>

        <table id='table 1'>
            <caption> This is where caption goes</caption>
            <tr>
                <th>heading 1</th>
                <th>heading 2</th>
                <th>heading 3</th>
            </tr>
            <tr>
                <td>some data</td>
                <td>some data</td>
                <td>some data</td>
            </tr>
            <tr>
                <td>some data</td>
                <td>some data</td>
                <td>some data</td>
            </tr>
        </table>

        <table id='table 2'>
            <caption> Second Table</caption>
            <tr>
                <th>heading 1</th>
                <th>heading 2</th>
                <th>heading 3</th>
            </tr>
            <tr>
                <td>some data</td>
                <td>some data</td>
                <td>some data</td>
            </tr>
            <tr>
                <td>some data</td>
                <td>some data</td>
                <td>some data</td>
            </tr>
        </table>

        <table id='table 3'>
            <caption> using tbody, tfoot and thead</caption>
            <thead>
                <tr>
                    <th>heading 1</th>
                    <th>heading 2</th>
                    <th>heading 3</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>some data</td>
                    <td>some data</td>
                    <td>some data</td>
                </tr>
                <tr>
                    <td>some data</td>
                    <td>some data</td>
                    <td>some data</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>datas</td>
                    <td>datas</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default HtmlTable