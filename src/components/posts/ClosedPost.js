export const ClosedPost = ({post, handleMakeChanges}) =>{

    return(

        <>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.prompt.prompt}</p>
            <p>{post.emotion.emotion}</p>
            <button type="button" onClick={() =>handleMakeChanges()}>Make changes</button>
            <button type="button" >Comments</button>
        </>
    )
}