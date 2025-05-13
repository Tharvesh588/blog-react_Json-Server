
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {
  const navi = useNavigate();
  const [story, setStory] = useState([]);

  let tot = story.length;
  useEffect(
    () => {
      fetch('http://localhost:1042/stories').
        then((data) => data.json()).
        then((data => setStory(data))).catch(err => console.log(err))
    }, []
  );
  return (
    <div className='story d-flex' onClick={() => navi(`/story/${story.id}/${tot}`)}>
      {story.length > 0 ?
        (
          story.map((story) => (
            <div key={story.id} className='mx-3'>
              <div className="grd-border">
                <img className="rounded-circle story-dp " src={story.user.profile_pic} alt="dp" />
              </div>
              <p className='text-truncate' style={{ width: "50px" }}>{story.user.username}</p>
            </div>
          ))
        ) : (
          <div>
            No story Available
          </div>
        )}
    </div>
  )
}

export default Stories

