import "../styles/posts/post.css"
export const AllPost = ({post}) =>{

    return (
        <div className="post_div" style={{backgroundImage:`linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${post.image})`}}>
            <div ></div>
            <div>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
            </div>
            <div>
                <p>{post.prompt?.prompt}</p>
            </div>
        </div>
    )
}