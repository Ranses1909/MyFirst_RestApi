import React from 'react'
import { useGlobalContext } from '../context';


// PLANS FOR NEXT DAY :  try to figure out how to do what i want to do with the pague (write down the steps), next get going with components and display items
// https://www.mongodb.com/languages/mern-stack-tutorial

const ReadyKeyboards = () => {
const {readyToUse} = useGlobalContext();
  return (
    <div className="onsale">
      {console.log(readyToUse)}

    </div>
  )
}

export default ReadyKeyboards