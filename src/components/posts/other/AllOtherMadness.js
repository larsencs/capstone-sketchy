import React from "react";

export const AllOtherMadness = ({madness, comment, updateComment, updateLeaveComment, leaveComment, saveComment}) =>{

    const handleChange = (event) =>{
        const tempCom = {...comment}

        tempCom[event.target.id] = event.target.value

        updateComment(tempCom)
    }

    const componentSubArr = [
        
        
    ]

    //An array of React components which are rendered depending on if leaveComment is true or false
    const componentArr = [<>
        <div className="post_div" style={{backgroundImage:`url(${madness.image})`} }>
        <div>
            <h4>{madness?.title}</h4>
            <p>{madness?.description}</p>
        </div>
        <div>
            <p>{madness?.prompt?.prompt}</p>
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
    <div style={{backgroundImage:`url(${madness?.image})`}}>
    <div>
        <h4>{madness?.title}</h4>
        <p>{madness?.description}</p>
    </div>
    </div>

    <div>
        <p>{madness?.prompt?.prompt}</p>
        <button onClick={()=> updateLeaveComment(true)}>Add a comment</button>
    </div>
    </div>]
    return(
        <>
        {leaveComment ? componentArr[0] : componentArr[1]}
        </>
    )
}