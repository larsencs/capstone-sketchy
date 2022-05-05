export const UpdateMadness = ({madness, updateMadness, handleDeleteMadness, handleEditMadness}) =>{

    
    const controlInput = (event) =>{
        let target = {...madness}

        target[event.target.id] = event.target.value
        console.log(target)

        updateMadness(target)

    }

    return(
        <>
        <img src="https://picsum.photos/300/400"></img>
        <form>
            <fieldset>
                
                <input type="text" id="prompt" placeholder="chosen prompt"  disabled={true} value={madness?.prompt}></input>
                <input type="text" id="mood" placeholder="mood" disabled={true} value={madness?.emotion?.emotion}></input>
                <input type="text" id="title" placeholder="title" onChange={controlInput} value={madness?.title}></input>
                <input type="text" id="image" placeholder="image" onChange={controlInput} value={madness?.image}></input>
                <input type="text" id="description" placeholder="description" onChange={controlInput} value={madness?.description}></input>
                <button type="button" onClick={handleDeleteMadness}>Delete</button>
                <button type="button" onClick={handleEditMadness}>Submit</button>
            </fieldset>
        </form>
    </>
    )
}