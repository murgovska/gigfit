import React, { Component } from 'react'

const IMAGES = [
  {
    id: 'image02',
    image: require('../../assets/images/thumbs/Thumbnail1.png')
  },
  {
    id: 'image03',
    image: require('../../assets/images/thumbs/Thumbnail2.png')
  },
  {
    id: 'image04',
    image: require('../../assets/images/thumbs/Thumbnail3.png')
  },
  {
    id: 'image05',
    image: require('../../assets/images/thumbs/Thumbnail4.png')
  },
  {
    id: 'image06',
    image: require('../../assets/images/thumbs/Thumbnail5.png')
  }
]

class PartSix extends Component {
  render () {
    return (
      <div className='section partSix'>
        <div className='content'>
          <h2>97% percent of GiG Fit users lose weight with GiG Fit.</h2>
          <p className='description'>
            Become one of thousand of others making a healthy bet on a better life.
            Become the best version of yourself, and experience the many health benefits of smaller waist size.
          </p>
          <div className='images'>
            <div className='tile gig'>
              <p className='text'>#GiGFit</p>
            </div>
            {IMAGES.map((image) => {
              return <img key={image.id} className='tile' src={image.image} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PartSix