import React from "react"
import { Link } from "react-router-dom"

export const ClosedMadness = ({madness, seeComments, updateSeeComments, comments}) =>{


    const componentSubArr = [
        <div className="chosen_prompts" id={madness?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {madness?.prompt?.prompt}</p>
      </div>
      ,
      <div className="chosen_prompts" id={madness?.emotionId}>
      <p id="prompt_text">Draw:</p>
      <p> {madness?.prompt}</p>
    </div>
      ]
  
      const componentArr = [
        <>
        <div className="card_container">
          <div
            className="finished_picture"
            style={{ backgroundImage: `url(${madness?.image})` }}
          ></div>
          <div className="closed_prompt">
            <div className="post_info">
              <h4>{madness?.title}</h4>
              <p>{madness?.description}</p>
            </div>
            {isNaN(madness?.promptId) ? componentSubArr[1] : componentSubArr[0]}
          </div>
        </div>
        <div className="closed_prompt_btns">
          <Link to={`/${madness?.id}/update_post/`}>
            <button type="button" id={`${madness?.emotion?.emotion}_btn`}>Make changes</button>
          </Link>
          <button type="button" onClick={() => updateSeeComments(true)} id={`${madness?.emotion?.emotion}_btn`}>Comments</button>
        </div>
      </>
      ,
      <>
      <div className="card_container">
        <div
          className="finished_picture"
          style={{ backgroundImage: `url(${madness?.image})` }}
        ></div>
        <div className="post_comments">
          <h4>Comments</h4>
          {comments.map(r => r.postId === madness?.id ? <p key={r.id}>{r.comment}</p> : "") }
        </div>
      </div>
      <div className="closed_prompt_btns">
        <Link to={`/${madness?.id}/update_post/`}>
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