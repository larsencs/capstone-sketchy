import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import { ClosedMadness } from "./ClosedMadness";
import { ClosedMundane } from "./ClosedMundane";
import { ClosedPostModal } from "../../modal/ClosedPostModal";


export const ClosedPost = ({post, comments, madness}) =>{

    const [seeComments, updateSeeComments] = useState(false)
    const [showModal, updateShowModal] = useState(false)

    return (
      <>
        {post ? <ClosedMundane post={post} seeComments={seeComments} updateSeeComments={updateSeeComments} comments={comments} updateShowModal={updateShowModal}/> : <ClosedMadness madness={madness} seeComments={seeComments} updateSeeComments={updateSeeComments} comments={comments} updateShowModal={updateShowModal}/>}
        <ClosedPostModal show={showModal}/>
      </>
    );
}