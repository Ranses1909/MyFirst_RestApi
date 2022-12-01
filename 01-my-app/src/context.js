import React, { useState, useContext} from 'react'
const AppContext = React.createContext();
const url = 'http://localhost:9000/api/users/'
// Since we need to understand that we will wrap the whole app inside appProvider
const AppProvider = ({children})=>{
  const [readyToUse, setReadyToUse]= useState([]);
  const [loading, setLoading] = useState(false);

  // IF YOU USE SET YOU WILL CREATE AN INFINITE LOOP BECAUSE OF SET AND USEEFFECT you need to add empty dependencie array in useEffect
  const fetchData = async()=>{
    // setLoading(true);
   const response = await fetch(url);
   const data = await response.json()
   //  console.log({data})
   setReadyToUse(data[0].arrayData)
  }
  
  React.useEffect(()=>{
    fetchData();
  },[])
  console.log(readyToUse)
return(
  // AppContext.PROVIDER needs to wrap your whole component tree or even the whole app 
   <AppContext.Provider value={{
    readyToUse,
    setReadyToUse,
    loading,
    setLoading,
    }}>
  {children} 
</AppContext.Provider>
)};

export const useGlobalContext = () => {
  // the same context that we created
  return useContext(AppContext)
};

export { AppContext, AppProvider }