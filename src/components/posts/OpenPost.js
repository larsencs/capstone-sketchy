export const OpenPost = ({post}) =>{
    return (
      <>
        <div className="open_prompts">
          <h4>{post.prompt.prompt}</h4>
          <p>Mood: {post.emotion.emotion}</p>
        </div>
      </>
    );
}