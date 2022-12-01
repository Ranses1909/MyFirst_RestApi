import React from 'react'
import {useParams } from 'react-router-dom'

const Testing = () => {
    const [keyboard, setKeyboard] = React.useState(null)
    const {_id} = useParams();
    const url = 'http://localhost:9000/api/users/'
    const getKeyboard = async()=>{
          const response = await fetch(`${url}${_id}`);
          // reads the data returned by the server and returns a promise that resolves with a JSON object.
          const data = await response.json()
          setKeyboard(data[0].arrayData)
        } 
        React.useEffect(()=>{
          getKeyboard()
        },[_id])
        
        console.log(keyboard)
  return (
    <div>
    <h3 style={{color: 'white'}}>TESTING {_id}</h3>
    </div>
  )
}

export default Testing
