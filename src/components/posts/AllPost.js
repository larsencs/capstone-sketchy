import "../styles/posts/post.css"
export const AllPost = ({post}) =>{

    return (
        <div className="post_div" style={{backgroundImage:`url(${post.image})`}}>
            <div ></div>
            <div>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
            </div>
            <div>
                <p>{post.prompt.prompt}</p>
            </div>
        </div>
    )
}