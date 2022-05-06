import "../../styles/forms/Complete.css"

export const UpdateMadness = ({madness, updateMadness, handleDeleteMadness, handleEditMadness}) =>{

    
    const controlInput = (event) =>{
        let target = {...madness}

        target[event.target.id] = event.target.value
        console.log(target)

        updateMadness(target)

    }

    return(
        <>
        <div className="complete_container">
        <div className="complete_card_container">
          <div
            className="complete_finished_picture"
            style={{ backgroundImage: `url(${madness?.image})` }}
          ></div>
          <div className="complete_closed_prompt">
          <div className="complete_prompts_field">
        <div>
        <input type="text" id="title" placeholder="title" required onChange={controlInput} value={madness.title}></input>
        <input type="text" id="image" placeholder="image" required onChange={controlInput} value={madness.image}></input>
        <textarea type="text" id="description" rows="10" columns="10" required placeholder="description" onChange={controlInput} value={madness.description}></textarea>

        </div>
    </div>
            <div className="complete_chosen_prompts" id={madness?.emotion?.emotion}>
        <p id="prompt_text">Draw:</p>
        <p> {madness?.prompt}</p>
      </div>
      <div className="complete_buttons">
      <button type="button" onClick={handleDeleteMadness}>Delete</button>
        <button type="button" onClick={handleEditMadness}>Submit</button>
      </div>
          </div>
        </div>
        </div>
    </>
    )
}
