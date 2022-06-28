import { Carousel } from 'antd'
import React from 'react'

class Banner extends React.Component {
  render () {
    return (
        <Carousel>
            <div>
                <h3>
                    <img src="../../../public/img/banner.png" alt="" />
                </h3>
            </div>
        </Carousel>
    )
  }
}
export default Banner
