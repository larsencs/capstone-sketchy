import "../../styles/posts/post.css"
import { AllMadnessPosts } from "./AllMadnessPosts"
import { AllMundanePosts } from "./AllMundanePosts"

export const AllPost = ({post, madness}) =>{

    return (
        <>
            {madness ? <AllMadnessPosts madness={madness}/> : ""}
            {post ? <AllMundanePosts post={post}/> : ""}
            
        </>
    )
}