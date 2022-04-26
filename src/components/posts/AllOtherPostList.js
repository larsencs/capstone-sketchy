import { AllOtherPost } from "./AllOtherPost";

export const AllOtherPostList = ({getLoggedInUser, post}) =>{

    const userId = getLoggedInUser();
    return(
        <>
            {post.map(r=> r.isComplete && r.userId !== userId  ? <AllOtherPost key={r.id} post={r} getLoggedInUser={getLoggedInUser}/> : "")}
        </>
    )
}