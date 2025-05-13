import React, { useEffect, useState } from 'react'

function Recom() {

  const [profile, myprofile] = useState(null)
  const [Sug, setSug] = useState([])
  useEffect(
    () => {
      fetch('http://localhost:1042/profile').
        then(data => data.json()).
        then(data => myprofile(data)).
        catch(err => console.log(err))


      fetch('http://localhost:1042/suggestion').
        then(data => data.json()).
        then(data => setSug(data)).
        catch(err => console.log(err))
    }, []
  )

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ?
          <div className='d-flex'>
            <img className="rounded-circle dp" src={profile.profile_pic} alt="" />
            <h4>{profile.username}</h4>
            <p className='ms-auto text-primary'>Search</p>
          </div>
          : <p>Profile not found</p>}

        <div className='d-flex'>
          <b>Suggestion</b>
          <b className="ms-auto">See All</b>
        </div>

        {Sug.length > 0 ?
          (
            <div className='d-flex flex-column align-item-center'>
              {Sug.map((suggestion) => (
                <div key={suggestion.id}>
                  <div className='d-flex'>
                    <img className="rounded-circle dp" src={suggestion.profile_pic} alt="" />
                    <h4>{suggestion.username}</h4>
                    <b className="ms-auto text-primary">See</b>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              No Suggestions
            </div>
          )}


      </div>

    </div>
  )
}

export default Recom