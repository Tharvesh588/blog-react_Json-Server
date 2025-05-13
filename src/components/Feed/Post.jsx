import React, { useEffect, useState } from 'react'

function Post() {
  const [post, setPost] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:1042/posts').
        then((data) => data.json()).
        then((data => setPost(data))).
        catch(err => console.log(err))
    }, []
  );

  return (
    <div>
      {post.length > 0 ?
        (
          <div className='d-flex flex-column align-item-center'>
            {post.map((post) => (
              <div key={post.id}>
                <div className='d-flex'>
                  <img className="rounded-circle dp" src={post.user.profile_pic} alt="" />
                  <h4>{post.user.username}</h4>
                </div>
                <img className="images" src={post.image} alt="" />
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                </div>
                <b>{post.likes} likes</b>
                <p>{post.user.username} : {post.caption}</p>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div>
            No post Available
          </div>
        )}
    </div>
  )
}

export default Post