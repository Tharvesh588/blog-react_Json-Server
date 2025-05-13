import React from 'react'
import Stories from './Stories'
import Post from './Post'


function Feed() {
  return (
    <div>
        <div>
            <Stories/>
        </div>
        <div><Post/></div>
    </div>
  )
}

export default Feed