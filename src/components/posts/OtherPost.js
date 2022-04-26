export const OtherPost = ({post}) =>{
    return(
        <div className="other_posts" style={{backgroundImage: `url(${post.image})`}}>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
        </div>
    )
}