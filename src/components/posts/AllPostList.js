import { AllPost } from "./AllPost"
import "../styles/posts/post.css"

export const AllPostList = ({post, getLoggedInUser}) =>{

    return(
        <section className="all_post_container">
            {post.map(r=> r.isComplete ? <AllPost key={r.id} post={r}/> : "")}
        </section>
    )

}