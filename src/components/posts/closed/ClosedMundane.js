import React from "react"
import { Link } from "react-router-dom"

export const ClosedMundane = ({post, seeComments, updateSeeComments, comments}) =>{
    const componentSubArr = [
        <div className="chosen_prompts" id={post?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {post?.prompt?.prompt}</p>
      </div>
      ,
      <div className="chosen_prompts" id={post?.emotionId}>
      <p id="prompt_text">Draw:</p>
      <p> {post?.promptId}</p>
    </div>
      ]
  
      const componentArr = [
        <>
        <div className="card_container">
          <div
            className="finished_picture"
            style={{ backgroundImage: `url(${post?.image})` }}
          ></div>
          <div className="closed_prompt">
            <div className="post_info">
              <h4>{post?.title}</h4>
              <p>{post?.description}</p>
            </div>
            {isNaN(post?.promptId) ? componentSubArr[1] : componentSubArr[0]}
          </div>
        </div>
        <div className="closed_prompt_btns">
          <Link to={`/${post?.id}/update_post/`}>
            <button type="button" id={`${post?.emotion?.emotion}_btn`}>Make changes</button>
          </Link>
          <button type="button" onClick={() => updateSeeComments(true)} id={`${post?.emotion?.emotion}_btn`}>Comments</button>
        </div>
      </>
      ,
      <>
      <div className="card_container">
        <div
          className="finished_picture"
          style={{ backgroundImage: `url(${post?.image})` }}
        ></div>
        <div className="post_comments">
          <h4>Comments</h4>
          {comments.map(r => r.postId === post.id ? <p key={r.id}>{r.comment}</p> : "") }
        </div>
      </div>
      <div className="closed_prompt_btns">
        <Link to={`/${post?.id}/update_post/`}>
          <button type="button">Make changes</button>
        </Link>
        <button type="button" onClick={()=> updateSeeComments(false)}>Details</button>
      </div>
    </>
      ]


      return(
          <>
            {seeComments ? componentArr[1] : componentArr[0]}
          </>
          )
}