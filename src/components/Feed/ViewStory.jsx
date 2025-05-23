import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ViewStory() {
    const { id, tot } = useParams();
    const [story, setStory] = useState(null);
    const navi = useNavigate();
    useEffect(
        () => {
            fetch(`http://localhost:1042/stories/${id}`).
                then((data) => data.json()).
                then((data => setStory(data))).
                catch(err => console.log(err))

        }, [id]);

        if (id > tot || id <= 0) {
            navi('/')
        }
    return (
        <div>
            {
                story ? (
                    <div className='d-flex justify-content-center align-items-center'>
                        <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill mx-2"></i></Link>
                        <img className="vh-100" src={story.image} alt="Story" />
                        <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill mx-2"></i></Link>

                    </div>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
}

export default ViewStory