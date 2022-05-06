import "../../styles/forms/Complete.css"

export const UpdateMundane = ({post, handleDeletePost, handleEditPost, updatePost}) =>{

    const controlInput = (event) =>{
        let target = {...post}

        target[event.target.id] = event.target.value
        console.log(target)
        console.log("post", post)

        updatePost(target)

    }

    return(
        <>
        <div className="complete_container">
        <div className="complete_card_container">
          <div
            className="complete_finished_picture"
            style={{ backgroundImage: `url(${post?.image})` }}
          ></div>
          <div className="complete_closed_prompt">
          <div className="complete_prompts_field">
        <div>
        <input type="text" id="title" placeholder="title" required onChange={controlInput} value={post.title}></input>
        <input type="text" id="image" placeholder="image" required onChange={controlInput} value={post.image}></input>
        <textarea type="text" id="description" rows="10" columns="10" required placeholder="description" onChange={controlInput} value={post.description}></textarea>

        </div>
    </div>
            <div className="complete_chosen_prompts" id={post?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {post?.prompt?.prompt}</p>
      </div>
      <div className="complete_buttons">
      <button type="button" onClick={handleDeletePost}>Delete</button>
        <button type="button" onClick={handleEditPost}>Submit</button>
      </div>
          </div>
        </div>
        </div>
    </>
    )
}
{/* <div className="form_container">
<form className="form_box">
    <fieldset className="prompts_field">
    <div className="post_image" style={{ backgroundImage: `url(${post.image})` }}></div>
        <input type="text" id="prompt" placeholder="chosen prompt"  disabled={true} value={post.prompt?.prompt}></input>
        <input type="text" id="mood" placeholder="mood" disabled={true} value={post.emotion?.emotion}></input>
        <input type="text" id="title" placeholder="title" required onChange={controlInput} value={post.title}></input>
        <input type="text" id="image" placeholder="image" required onChange={controlInput} value={post.image}></input>
        <textarea type="text" id="description" rows="4" columns="10" required placeholder="description" onChange={controlInput} value={post.description}></textarea>
        <button type="button" onClick={handleDeletePost}>Delete</button>
        <button type="button" onClick={handleEditPost}>Submit</button>
    </fieldset>
</form>
</div> */}
