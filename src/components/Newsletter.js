import React from 'react'

export default function Newsletter() {
  return (

<div className="newsletterbox">
<div id="revue-embed" className='revue-embed'>
    <p className='titleLW2'> <strong> Subscribe to my Newsletter</strong></p>
    
  <form className='revueForm' action="https://www.getrevue.co/profile/laurin_wirth/add_subscriber" method="post" 
  id="revue-form" name="revue-form"  target="_blank" rel="noreferrer">

<div className='inputsForm'> 
  <div className="revue-form-group">
    <input className='revue-form-field' placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
  </div>
  <div class="revue-form-actions">
    <input className='submitbutton' type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"/>
  </div>
  </div>
  <div className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" rel="noreferrer" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
  </form>
</div>

</div>



  )
}
