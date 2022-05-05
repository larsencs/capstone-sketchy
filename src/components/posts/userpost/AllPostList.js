import { AllPost } from "./AllPost"
import "../../styles/posts/post.css"

export const AllPostList = ({post, getLoggedInUser, madness}) =>{

    return(
        <section className="all_post_container">
            {post.map(r=> r.isComplete ? <AllPost key={r.id} post={r}/> : "")}
            {madness.map(r=> r.isComplete ? <AllPost key={r.id} madness={r}/> : "")}
        </section>
    )

}