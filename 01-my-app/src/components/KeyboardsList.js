import React from 'react'
import ReadyKeyboards from '../components/ReadyKeyboards'
import { useGlobalContext } from '../context';

const KeyboardsList = () => {
const {readyToUse}= useGlobalContext();
  return (
<section className="keyboard-list" >
  <h2>Ready to use</h2>
<div className="list-container">
  {/* {console.log(readyToUse)} */}
{readyToUse.map((item) =>{
  // each item is one of the objects inside the list
  return <ReadyKeyboards key={item._id} {...item}/>
})}
</div>
</section>
  )
}

export default KeyboardsList