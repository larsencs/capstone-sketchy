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
            <div class="chosen_prompts" id={post.emotion.emotion}>
              <p>{post.prompt.prompt}</p>
              <p>{post.emotion.emotion}</p>
            </div>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
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