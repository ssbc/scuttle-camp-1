import html from 'yo-yo'
import { Domain } from 'inux'

import navigation from './partials/navigation'

const DOMAIN = 'main'
 
const view = (model, dispatch) => html`
  <div>
    ${navigation}
    <h1>${DOMAIN} view</h1>

    <a href='rsvp' class='button'>rsvp link</a> <br />
    January 10th 2016 <br />
    Map <br />

  </div>
`

export default Domain({
  name: DOMAIN,
  routes: [
    ['', (params, model, dispatch) => {
      return view(model, dispatch)
    }],
  ]
})
 
