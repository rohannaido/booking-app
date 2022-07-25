import './ImageSlider.css'
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const ImageSlider = ({images, setShowImageSlider}) => {
    // console.log(images.images[0]);
    const [imageNumber, setImageNumber] = useState(0);
    return (
        <div className="imageSlider">
            <div className='imageSlider_container'>
                <div className='imageSlider_slideButton left' onClick={() => setImageNumber(prev => {
                    if(prev > 0){
                        return prev - 1;
                    } return (images.length - 1);
                })}>
                    <AiOutlineArrowLeft />
                </div>
                <div className='imageSlider_imageDiv'>
                    <img src={images[imageNumber]} />
                    <div className='imageSlider_closeButton' onClick={() => {
                        setShowImageSlider(false);
                    }}>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='imageSlider_slideButton right' onClick={() => setImageNumber(prev => {
                    if(prev + 1 < images.length){
                        return prev + 1;
                    }   return 0;
                    })}>
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;