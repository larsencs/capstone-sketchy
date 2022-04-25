import { GetMoods } from "../modules/MoodManager"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { Prompts } from "../prompts/Prompts"
import "../styles/prompts/generate.css"

export const Generate = () =>{

    const [mood, updateMood] = useState([])
    const [gen, updateGen] = useState({})

    const navigate = useNavigate()

    useEffect(()=>{
        GetMoods()
            .then(fetchedMood => updateMood(fetchedMood))
    },[])

    const controlInput = (event) =>{
        const emotion = {...gen}

        emotion[event.target.id] = event.target.value
        updateGen(emotion)

    }

    const handleClick = () =>{
        //Navigates to prompt and passes an object named state as a prop, so that prompt can utilize the results of generate
        navigate("/prompt", { state:{prompt: gen}})

    }

    return (
      <>
        <section className="gen_container">
          
          <div>
          <img src="https://picsum.photos/300/400"/>
            <form>
              <fieldset>
                <label htmlFor="mood_selector">Select a mood</label>
                <select id="emotionId"  onChange={controlInput}>
                  {mood.map((r) => (
                    <option value={r.id} key={r.id}>
                      {r.emotion}
                    </option>
                  ))}
                </select>
              </fieldset>
            </form>
            <button type="button" onClick={handleClick}>Generate</button>
          </div>
        </section>
      </>
    );
}
