export const AllMundanePosts = ({post}) =>{

    return(

        <div className="yet_another_post_container">
        <div className="single_post_container">
        <div className="post_div" style={{backgroundImage:`linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),url(${post?.image})`}}></div>
        <div className="post_text_container">
            <h4>{post?.title}</h4>
            <p>{post?.description}</p>
        </div>
        <div className="post_prompt_container" id={post.emotion.emotion}>
            <p>{post?.prompt?.prompt}</p>
        </div>
        </div>
    </div>
    )

}