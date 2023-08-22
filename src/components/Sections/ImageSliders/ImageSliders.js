import React from 'react'
import sliderImages from './sliderImages'
import SimpleImageSlider from "react-simple-image-slider";

const ImageSliders = () => {
  return (
    <SimpleImageSlider
            width={"100%"}
            height={300}
            images={sliderImages}
            autoPlay={true}
            showBullets={true}
          />
  )
}

export default ImageSliders