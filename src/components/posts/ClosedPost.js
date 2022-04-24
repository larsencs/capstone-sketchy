import { Link } from "react-router-dom"

export const ClosedPost = ({post}) =>{

    return (
      <>
        <div className="closed_prompt">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.prompt.prompt}</p>
          <p>{post.emotion.emotion}</p>
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