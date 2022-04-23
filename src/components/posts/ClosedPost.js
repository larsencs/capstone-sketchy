export const ClosedPost = ({post}) =>{
    return(

        <>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.prompt.prompt}</p>
            <p>{post.emotion.emotion}</p>
            <button>Make changes</button>
            <button>Comments</button>
        </>
    )
}