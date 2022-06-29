import './banner.css'

import { Carousel } from 'antd'
import React from 'react'

class Banner extends React.Component {
  render () {
    return (
        <Carousel>
            <img src='/img/banner.png'></img>
        </Carousel>
    )
  }
}
export default Banner
