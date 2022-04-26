export const AllOtherPost = ({post}) =>{
    return (
        <div>
            <div style={{backgroundImage:`url(${post.image})`}}></div>
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