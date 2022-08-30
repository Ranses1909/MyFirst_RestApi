import axios from "axios";
import React, { useState, useEffect, useContext} from 'react'
const AppContext = React.createContext();
const url = 'http://localhost:9000/api/users'
// Since we need to understand that we will wrap the whole app inside appProvider
const AppProvider = ({children})=>{
  const [readyToUse, setReadyToUse]= useState();

  // IF YOU USE SET YOU WILL CREATE AN INFINITE LOOP BECAUSE OF SET AND USEEFFECT you need to add empty dependencie array in useEffect
  const fetchData = async()=>{
   const response = await fetch(url);
   const data = await response.json()
   setReadyToUse(data)
  }

  useEffect(()=>{
    fetchData();
  },[])
return(
  // AppContext.PROVIDER needs to wrap your whole component tree or even the whole app l
   <AppContext.Provider value={{
     readyToUse,
    }}>
  {children}
</AppContext.Provider>
)};

export const useGlobalContext = () => {
  // the same context that we created
  return useContext(AppContext)
};

export { AppContext, AppProvider }