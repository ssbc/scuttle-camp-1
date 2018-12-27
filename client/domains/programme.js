import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'programme'

const view = (params, model, dispatch) => html`
  <div>
    <div class='sub-section center'>
      <img src='images/hermes_watering.gif' />
    </div>

    <div class='sub-section'>
      <p>
        This is totally a <strong>work in progress</strong>. <br /><br />
        The format is going to be lifted largely from Enspiral Retreats - minimal formal structure such as opening and welcoming, a couple of hosted sessions, and then a lot of time for Open Space (sessions hosted by peers), swims in the river, and late night chats. 
      </p>

      <div style='display: grid; grid-template-columns: 1fr 1fr; grid-gap:1rem;'>
        <div>
          <h4>Monday</h4>
          <table>
            <thead>
              <tr>
                <th> Feb 25 </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 10:30 </td>
                <td> Arrival, mingling </td>
              </tr>
              <tr>
                <td> 12:00 </td>
                <td> Lunch </td>
              </tr>
              <tr>
                <td> 18:00 </td>
                <td> Dinner </td>
              </tr>
              <tr>
                <td>20:00 +</td>
                <td> music jam, hanging out </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Tuesday</h4>
          <table>
            <thead>
              <tr>
                <th>Feb 26</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 9:00 </td>
                <td> Breakfast </td>
              </tr>
              <tr>
                <td> 12:00 </td>
                <td> Lunch </td>
              </tr>
              <tr>
                <td> 18:00 </td>
                <td> Dinner </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Wednesday</h4>
          <table>
            <thead>
              <tr>
                <th>Feb 27</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 9:00 </td>
                <td> Breakfast </td>
              </tr>
              <tr>
                <td> 12:00 </td>
                <td> Lunch </td>
              </tr>
              <tr>
                <td> 18:00 </td>
                <td> Dinner </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Thursday</h4>
          <table>
            <thead>
              <tr>
                <th>Feb 28</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 9:00 </td>
                <td> Breakfast </td>
              </tr>
              <tr>
                <td> 12:00 </td>
                <td> Lunch </td>
              </tr>
              <tr>
                <td> 13.30 </td>
                <td> Close + Departure </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
`

export default Domain({
  name: NAME,
  routes: [
    [NAME, render(view)]
  ]
})
