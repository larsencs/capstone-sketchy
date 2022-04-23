export const OpenPost = ({post}) =>{
    return(
    <div>
        <h4>{post.prompt.prompt}</h4>
        <p>Mood: {post.emotion.emotion}</p>
    </div>
    )
}