export const OtherPost = ({post}) =>{


    return(
        <div className="other_posts" style={{backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${post.image})`}}>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
        </div>
    )
}