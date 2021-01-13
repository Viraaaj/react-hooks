import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectDataFetch() {

  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [buttonClickId, setButtonClickId] = useState(1)

  useEffect(() => {

    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
    .then(response => {
      console.log(response);
      setPosts(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [buttonClickId])

  const handleClick = () => {
    setButtonClickId(id)
  }

  return (
    <div>

                      {/* to render posts according to id  */}
      <input 
        type="text"
        value={id}
        onChange={e => setId(e.target.value)} />
      
      <button onClick={handleClick} > fetch posts </button>

      <div key={posts.id}> {posts.title} </div>




                    {/* to render all posts  */}
      {/* <ul>
        {posts.map(post => (
          <p key={post.id} > {post.title} </p>
        ))}
      </ul> */}
    </div>
  )
}

export default UseEffectDataFetch
