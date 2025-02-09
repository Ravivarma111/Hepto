import React from 'react'

function Footer() {
  return (
    <div className='footer' style={{width:'100%', height:'100px', display:'flex',marginTop:'400px'}}>
    <div className='row'>
    <div class="card text-bg-secondary col-lg-4 col-md-6 mb-3">

  <div class="card-header">Page Details</div>
  <div class="card-body">
    <h5 class="card-title">Application details</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
  <div class="card text-bg-secondary col-lg-4 col-md-6 mb-3">

<div class="card-header">Address Details</div>
<div class="card-body">
  <h5 class="card-title">addresss: 1833993</h5>
  <p>phone-number:10839949333</p>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
 <div class="card text-bg-secondary col-lg-4 col-md-6 mb-3">

<div class="card-header">Website Details</div>
<div class="card-body">
<div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2024 Copyright:
        <a className="text-dark" href="https://yourwebsite.com/"> yourwebsite.com</a>
      </div>
</div>
</div>
</div>
   
   </div>



    
  )
}

export default Footer