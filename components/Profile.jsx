"use client"
import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name,
desc,
data,
handleEdit,
handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {name} Profile
        </span>
        </h1>
        <p className="desc text-left">{desc}</p>

        <div className="mt-10 prompt_layout">
      {data?.map((e)=>{ 

         return <PromptCard
        key={e._id}
        post={e}
        handleEdit={()=> handleEdit && handleEdit(e)}
        handleDelete={()=> handleDelete && handleDelete(e)}
        />}
      )}
    </div>

    </section>
  )
}

export default Profile