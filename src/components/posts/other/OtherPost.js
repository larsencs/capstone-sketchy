import { OtherMadness } from "./OtherMadness"
import { OtherMundane } from "./OtherMundane"

export const OtherPost = ({post, madness}) =>{


    return(
        <>
            {post ? <OtherMundane post={post}/> : <OtherMadness madness={madness}/>}
        </>
    )
}