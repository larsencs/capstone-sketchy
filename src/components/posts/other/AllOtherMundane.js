import React from "react";

export const AllOtherMundane = ({post, comment, updateComment, leaveComment, updateLeaveComment, saveComment}) =>{

    const handleChange = (event) =>{
        const tempCom = {...comment}

        tempCom[event.target.id] = event.target.value

        updateComment(tempCom)
    }

    const componentSubArr = [
        
        
    ]

    //An array of React components which are rendered depending on if leaveComment is true or false
    const componentArr = [<>
        <div className="post_div" style={{backgroundImage:`url(${post?.image})`} }>
        <div>
            <h4>{post?.title}</h4>
            <p>{post?.description}</p>
        </div>
        <div>
            <p>{post?.prompt?.prompt}</p>
        </div>
        </div>

        <input type="text" id="comment" onChange={handleChange} placeholder="leave a comment"></input>
        <div>
            <button onClick={()=> updateLeaveComment(false)}>Cancel</button>
            <button type="button" onClick={saveComment}>Submit</button>
        </div>
    </>
    ,
    <div>
    <div style={{backgroundImage:`url(${post?.image})`}}>
    <div>
        <h4>{post?.title}</h4>
        <p>{post?.description}</p>
    </div>
    </div>

    <div>
        <p>{post?.prompt?.prompt}</p>
        <button onClick={()=> updateLeaveComment(true)}>Add a comment</button>
    </div>
    </div>]
    return(
        <>
            {leaveComment ? componentArr[0] : componentArr[1]}
        </>
    )
}