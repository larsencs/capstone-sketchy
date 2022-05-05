import { AllOtherPost } from "./AllOtherPost";

export const AllOtherPostList = ({getLoggedInUser, post, madness}) =>{

    const userId = getLoggedInUser();
    return(
        <section className="all_post_container">
            {post.map(r=> r.isComplete && r.userId !== userId  ? <AllOtherPost key={r.id} post={r} getLoggedInUser={getLoggedInUser}/> : "")}
            {madness.map(r=> r.isComplete && r.userId !== userId  ? <AllOtherPost key={r.id} madness={r} getLoggedInUser={getLoggedInUser}/> : "")}
        </section>
    )
}