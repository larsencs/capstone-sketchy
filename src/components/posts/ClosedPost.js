import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"


export const ClosedPost = ({post, comments}) =>{

    const [seeComments, updateSeeComments] = useState(false)

    const componentArr = [
      <>
      <div className="card_container">
        <div
          className="finished_picture"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
        <div className="closed_prompt">
          <div className="post_info">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </div>
          <div className="chosen_prompts" id={post.emotion.emotion}>
            <p id="prompt_text">Draw:</p>
            <p> {post.prompt.prompt}</p>
          </div>
        </div>
      </div>
      <div className="closed_prompt_btns">
        <Link to={`/${post.id}/update_post/`}>
          <button type="button">Make changes</button>
        </Link>
        <button type="button" onClick={() => updateSeeComments(true)}>Comments</button>
      </div>
    </>
    ,
    <>
    <div className="card_container">
      <div
        className="finished_picture"
        style={{ backgroundImage: `url(${post.image})` }}
      ></div>
      <div className="closed_prompt">
        {comments.map(r => r.postId === post.id ? <p>{r.comment}</p> : console.log(r.postId)) }
      </div>
    </div>
    <div className="closed_prompt_btns">
      <Link to={`/${post.id}/update_post/`}>
        <button type="button">Make changes</button>
      </Link>
      <button type="button" onClick={()=> updateSeeComments(false)}>Details</button>
    </div>
  </>
    ]

    return (
      <>
        {seeComments ? componentArr[1] : componentArr[0]}
      </>
    );
}