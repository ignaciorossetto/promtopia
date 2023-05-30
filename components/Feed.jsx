"use client"
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((e)=> (
        <PromptCard
        key={e._id}
        post={e}
        handleTagClick={handleTagClick}
        />)
      )}
    </div>
    
    )
} 


const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [prompts, setPrompts] = useState(null)
  const handleSearchChange = (e) => { 
     
   }

   useEffect(() => {
     const fetchPosts = async () => { 
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPrompts(data)
      }
      fetchPosts()
  
   }, [])
   


   

  return (
    <sextion className='feed'>
      <form action="" className="relative w-full flex-center">
        <input 
        type="text"
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
         />
      </form>
      <PromptCardList
        data={prompts}
        handleTagClick={() => {}}
      />
    </sextion>
  )
}

export default Feed