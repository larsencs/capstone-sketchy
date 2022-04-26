import { AllPost } from "./AllPost"

export const AllPostList = ({post, getLoggedInUser}) =>{

    return(
        <>
            {post.map(r=> r.isComplete ? <AllPost key={r.id} post={r}/> : "")}
        </>
    )

}