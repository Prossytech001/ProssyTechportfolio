import React from 'react'
import './slide.css';
import Ama from '../../Assets/image/amazon.png'

import Goog from '../../Assets/image/google.png'
import Link from '../../Assets/image/linkedin.png'
import Micro from '../../Assets/image/microsoft.png'

import Payp from '../../Assets/image/paypal.png'
import Samsu from '../../Assets/image/samsung.png'
import Skp from '../../Assets/image/skype.png'
import Whatsapp from '../../Assets/image/whatsapp.png'

const slide = () => {
  return (
    <section className='slide'>
          <div class="slid">
            
            <div class="wrapper">
                <div class="item item1"><img src={Samsu} alt="" /></div>
                <div class="item item2"><img src={Goog} alt="" /></div>
                <div class="item item3"><img src={Link} alt="" /></div>
                <div class="item item4"><img src={Micro} alt="" /></div>
                <div class="item item5"><img src={Payp} alt="" /></div>
                <div class="item item6"><img src={Samsu} alt="" /></div>
                <div class="item item7"><img src={Skp} alt="" /></div>
                <div class="item item8"><img src={Whatsapp} alt="" /></div>

            </div>
        </div>
    </section>
  )
}

export default slide
