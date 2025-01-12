import React from 'react'
import { Input } from './ui/input'

const SearchBox = () => {
  return (
    <form>
      <Input placeholder="Search here..." className="rounded-full h-9" />
    </form>
  )
}

export default SearchBox
