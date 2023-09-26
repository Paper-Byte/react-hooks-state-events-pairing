import React, { useState } from 'react';
import video from '../data/video.js';
import { prettyDOM } from '@testing-library/react';

function App() {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <span>{`${video.views} views | Uploaded ${video.createdAt}`}</span>
      <br />
      <button
        onClick={() => setLikes((prevState) => prevState + 1)}
      >{`${likes}👍`}</button>{' '}
      <button
        onClick={() => setDislikes((prevState) => prevState + 1)}
      >{`${dislikes}👎`}</button>
      <br />
      <button
        onClick={() => setShowComments((prevState) => !prevState)}
      >
        {showComments ? 'Hide comments' : 'Show comments'}
      </button>
      <hr border-top="3px solid #bbb"></hr>
      {showComments ? (
        <>
          <h2>{`${video.comments.length} comments`}</h2>
          {video.comments.map((comment) => (
            <>
              <h3>{comment.user}</h3>
              <span>{comment.comment}</span>
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default App;
