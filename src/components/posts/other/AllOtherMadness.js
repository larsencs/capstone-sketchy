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
        <div className="yet_another_post_container">
            <div className="single_post_container">
            <div className="post_div" style={{backgroundImage:`linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${madness?.image})`}}></div>
            <div>
                <h4>{madness?.title}</h4>
                <p>{madness?.description}</p>
            </div>
            <div>
                <p>{madness?.prompt}</p>
            </div>
            <input type="text" id="comment" onChange={handleChange} placeholder="leave a comment"></input>
<div>
    <button onClick={()=> updateLeaveComment(false)}>Cancel</button>
    <button type="button" onClick={saveComment}>Submit</button>
</div>
            </div>
        </div>


    </>
    ,
    <div className="yet_another_post_container">
    <div className="single_post_container">
    <div className="post_div" style={{backgroundImage:`linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ),url(${madness?.image})`}}></div>
    <div>
        <h4>{madness?.title}</h4>
        <p>{madness?.description}</p>
    </div>
    <div>
        <p>{madness?.prompt}</p>
    </div>
    <div>
<p>{madness?.prompt?.prompt}</p>
<button onClick={()=> updateLeaveComment(true)}>Add a comment</button>
</div>
    </div>
</div>]
    return(
        <>
        {leaveComment ? componentArr[0] : componentArr[1]}
        </>
    )
}


