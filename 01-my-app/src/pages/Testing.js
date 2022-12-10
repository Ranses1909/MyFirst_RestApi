// import React from 'react'
// import {useParams, Link} from 'react-router-dom'
// import {useGlobalContext} from '../context.js'
// const Testing = () => {
//     // const [keyboard, setKeyboard] = React.useState(null)
//     const {_id} = useParams();
//     const url = 'http://localhost:9000/api/users/'
//     const getKeyboard = async()=>{
//           const response = await fetch(`${url}${_id}`);
//           // reads the data returned by the server and returns a promise that resolves with a JSON object.
//           const data = await response.json()
//           setKeyboard(data)
//         } 
//         React.useEffect(()=>{
//           getKeyboard()
//         },[_id])
   
        
        

//         return (
//                 <section className="single-keyboard">
//                 <h4 style={{color:'white'}}>{_id}</h4>
//                   <div className="single-img">
//                   <img src={data.image} alt={data.description} />
//                   </div>
//                   <div className="info">
//                   <p>{data.description}</p>
//                   <h4>{data.price}</h4>
//                   </div>
//                 <Link to={`/`} className='keyboard-detail'>
//                     Home
//                   </Link>
//                 </section>
//               )
// }

// export default Testing
