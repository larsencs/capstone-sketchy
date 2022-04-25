import { Link } from "react-router-dom"


export const ClosedPost = ({post}) =>{

    return (
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
          <button type="button">Comments</button>
        </div>
      </>
    );
}