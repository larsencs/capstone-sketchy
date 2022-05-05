import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import { ClosedMadness } from "./ClosedMadness";
import { ClosedMundane } from "./ClosedMundane";


export const ClosedPost = ({post, comments, madness}) =>{

    const [seeComments, updateSeeComments] = useState(false)

    return (
      <>
        {post ? <ClosedMundane post={post} seeComments={seeComments} updateSeeComments={updateSeeComments} comments={comments}/> : <ClosedMadness madness={madness} seeComments={seeComments} updateSeeComments={updateSeeComments} comments={comments}/>}
        
      </>
    );
}