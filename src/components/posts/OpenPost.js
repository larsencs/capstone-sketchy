export const OpenPost = ({post}) =>{
    return (
      <>
        <div className="open_prompts" id={post.emotion.emotion}>
          {/* <div><p>x</p></div> */}
          <h4>{post.prompt.prompt}</h4>
        </div>
      </>
    );
}