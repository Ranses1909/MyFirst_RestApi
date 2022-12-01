import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
   const {setSearchTerm} = useGlobalContext();
   const searchValue = React.useRef()
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm