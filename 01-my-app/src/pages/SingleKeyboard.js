import React from 'react'
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import {Link, useParams } from 'react-router-dom'

const url = 'http://localhost:9000/api/users/'
const SingleKeyboard = () => {
  const [keyboard, setKeyboard] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  // hook that react router provides so we can access those unique values 
  const {id} = useParams();
// KEEP TRYING TO SOLVE THIS FETCH PROBLEM, IT IS NOT FETCHING ANYTHING...

// fetch again cause we want to fetch just one
const getKeyboard = async()=>{
  const response = await fetch(`${url}${id}`);
  const data = await response.json()
  //  console.log({data})
  setKeyboard(data[0])   
  setLoading(false);
}
React.useEffect(()=>{
    getKeyboard();
  },[id])

  if( loading ){
    return <Loading />
  }
    // const {
    //   description,
    //   img,
    //   price,
    // } = keyboard2 
  {console.log(keyboard)}
//   {console.log(keyboard.price)}
    return (
      <div className="single-keyboard">
      {/* <h4 style={{color:'white'}}>{id}</h4> */}

       <div className="single-img">
        <img src={keyboard.img} alt={keyboard.description} className="actual-img"/>
        </div>

        <div className="info">
        <p>{keyboard.description}</p>
        <h4>{keyboard.price}</h4>
        
        </div>
      <Link to={`/`} className='keyboard-detail'>
          Home
        </Link>
      </div> 
    )
  }
  


export default SingleKeyboard;