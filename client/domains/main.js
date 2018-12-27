import html from 'yo-yo'
import { Domain } from 'inux'

import render from '../helpers/render'

const NAME = 'main'

const view = (params, model, dispatch) => html`
  <div>
    <div class='main-title center'> 
      <h1>ScuttleCamp ONE</h1>
      <h2>2019 February 25-28</h2>
    </div>

    <img src='images/cypherpunk.jpeg' />

    <div class='sub-section center'>
      Welcome traveller! Scuttle-camp is a 4-day getaway, set in a sweet secluded location. <br />
      A chance for scuttlebutts to hang out, get to know each other in person, it's for anyone already on scuttlebutt, especially those growing the p2p commons i.e. community gardners, spell weavers, academics, citizens, coders etc.
    </div>

    <div class='rsvp-link center'>
      <a href='register' class='button'>Register</a>
    </div>

    
  </div>
`

export { view }

export default Domain({
  name: NAME,
  routes: [
    ['/', render(view)]
  ]
})
