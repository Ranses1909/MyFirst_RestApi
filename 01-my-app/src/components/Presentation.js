import React from 'react';
import data from '../data'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';

 export default function Presentation() {
const [imgInfo, setImgInfow] = React.useState(data);
const [index, setIndex] = React.useState(0);

React.useEffect(() => {
    const lastIndex = imgInfo.length - 1;
  if(index >= imgInfo.length) {
      setIndex(0)
  }
  if(index < 0) {
      setIndex(lastIndex)
  }
}, [index,imgInfo]);

return(
    <section className="section">
<div className="section-center">
    {imgInfo.map((el, KeyboardIndex) => {
      const{ id, image, description,name} = el;
    //   all of them by default will have nextSlide
     let position = 'nextSlide'
 if(KeyboardIndex === index ){
     position = 'activeSlide' }
// placing the previous item to the left and in case that index === 0 then we place the last item to the left
 if(KeyboardIndex  === index-1  || (index ===  0  && KeyboardIndex === imgInfo.length-1)){
     position = 'lastSlide'
 }
//  the movement of every keyboards object depends on the css position 
      return(
          <article className={position} key={id}>
              <img src={image} alt={name} className='keyboard-img'/>
           <h4 className='description'>{description}</h4>
          </article>
      )
    })}
    <div className="btn-wrapper">
<button className='prev' onClick={() => setIndex(index-1)}> <BsFillArrowLeftSquareFill className='prevArrow'/> </button>
<button className='next' onClick={() => setIndex(index+1)} ><BsFillArrowRightSquareFill className='nextArrow'/>  </button>
    </div>
</div>
</section>
)
}