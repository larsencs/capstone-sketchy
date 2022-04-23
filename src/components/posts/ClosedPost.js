import { Link } from "react-router-dom"

export const ClosedPost = ({post}) =>{

    return(

        <>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.prompt.prompt}</p>
            <p>{post.emotion.emotion}</p>
            <Link to={`/${post.id}/update_post/`}><button type="button">Make changes</button></Link>
            <button type="button" >Comments</button>
        </>
    )
}