import { GetMoods } from "../modules/MoodManager"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { getEmoPrompts } from "../modules/PromptManager"
import { getPosts } from "../modules/PostManager"
import "../styles/prompts/generate.css"

export const Generate = () =>{

    const [post, updatePost] = useState([])
    const [emoPrompt, updateEmoPrompt] = useState([])
    const [mood, updateMood] = useState([])
    const [gen, updateGen] = useState({})
    const [happy, updateHappy] = useState(false)
    const [sad, updateSad] = useState(false)
    const [neutral, updateNeutral] = useState(false)
    const [angry, updateAngry] = useState(false)
    const [calm, updateCalm] = useState(false)
    const [anxious, updateAnxious] = useState(false)
    const [scared, updateScared] = useState(false)
    const [pencil, updatePencil] = useState(false)
    const [people, updatePeople] = useState(false)
    const [places, updatePlaces] = useState(false)
    const [things, updateThings] = useState(false)
    const [ink, updateInk] = useState(false)
    const [paint, updatePaint] = useState(false)
    const [selection, updateSelection] = useState({

    })

    const navigate = useNavigate()

    useEffect(()=>{
        GetMoods()
            .then(fetchedMood => updateMood(fetchedMood))
    },[])

    useEffect(()=>{
        getPosts().then(res => updatePost(res))
    },[])

    useEffect(()=>{
        getEmoPrompts().then(res => updateEmoPrompt(res))
    },[])

    const controlInput = (event) =>{
        const emotion = {...gen}

        emotion[event.target.id] = event.target.value
        updateGen(emotion)

    }

    const controlBtn = (event) =>{


      let target = event.target.id;

      if (target === "happy") {
        happy ? updateHappy(false) : updateHappy(true);
      }
      if (target === "sad") {
        sad ? updateSad(false) : updateSad(true);
      }
      if (target === "angry") {
        angry ? updateAngry(false) : updateAngry(true);
      }
      if (target === "neutral") {
        neutral ? updateNeutral(false) : updateNeutral(true);
      }
      if (target === "calm") {
        calm ? updateCalm(false) : updateCalm(true);
      }
      if (target === "scared") {
        scared ? updateScared(false) : updateScared(true);
      }
      if (target === "anxious") {
        anxious ? updateAnxious(false) : updateAnxious(true);
      }
      if (target === "pencil") {
        pencil ? updatePencil(false) : updatePencil(true);
      }
      if (target === "ink") {
        ink ? updateInk(false) : updateInk(true);
      }
      if (target === "paint") {
        paint ? updatePaint(false) : updatePaint(true);
      }
      if (target === "people") {
        people ? updatePeople(false) : updatePeople(true);
      }
      if (target === "places") {
        places ? updatePlaces(false) : updatePlaces(true);
      }
      if (target === "things") {
        things ? updateThings(false) : updateThings(true);
      }     

        
    }

    const handleClick = () =>{
        //Navigates to prompt and passes an object named state as a prop, so that prompt can utilize the results of generate

        

        navigate("/prompt", { state:{prompt: gen, selections: selection}})

    }

    return (
      <>
        <section className="gen_container">
          
          <section>
          {/* <img src="https://picsum.photos/300/400"/> */}
          {/* <div id="image_placeholder"></div> */}
          
          <div className="gen_btns_container">
          <div>
              <div><p>How are you feeling?</p></div>
          <button onClick={controlBtn} id="happy" className={ happy ? "button_on" : "button_off"} value={happy}>Happy</button>
          <button onClick={controlBtn} id="calm" className={ calm ? "button_on" : "button_off"} value={calm}>Calm</button>
          <button onClick={controlBtn} id="angry" className={ angry ? "button_on" : "button_off"} value={angry}>Angry</button>
          <button onClick={controlBtn} id="sad" className={ sad ? "button_on" : "button_off"} value={sad}>Sad</button>
          <button onClick={controlBtn} id="neutral" className={ neutral ? "button_on" : "button_off"} value={neutral}>Neutral</button>
          <button onClick={controlBtn} id="scared" className={ scared ? "button_on" : "button_off"} value={scared}>Scared</button>
          <button onClick={controlBtn} id="anxious" className={ anxious ? "button_on" : "button_off"} value={anxious}>Anxious</button>
          </div>
          <div>
            <div><p>What medium do you enjoy?</p></div>
            <button onClick={controlBtn} id="pencil" className={ pencil ? "button_on" : "button_off"} value={pencil}>Pencil</button>
            <button onClick={controlBtn} id="ink" className={ ink ? "button_on" : "button_off"} value={ink}>Ink</button>
            <button onClick={controlBtn} id="paint" className={ paint ? "button_on" : "button_off"} value={paint}>Paint</button>
          </div>
          <div>
            <div><p>What types of things do you like to create?</p></div>
            <button onClick={controlBtn} id="people" className={ people ? "button_on" : "button_off"} value={people}>People</button>
            <button onClick={controlBtn} id="places" className={ places ? "button_on" : "button_off"} value={places}>Places</button>
            <button onClick={controlBtn} id="things" className={ things ? "button_on" : "button_off"} value={things}>Things</button>
          </div>
          <div className="madness_btn">
            <button id="madness" type="button" >MADNESS</button>
            <button id="generate" type="button" onClick={handleClick}>Generate</button>
            </div>
          </div>
            <form>
            
              <fieldset>
                <label htmlFor="mood_selector">How are you feeling?</label>
                
                <select id="emotionId" onChange={controlInput}>
                <option selected={true} disabled={true}>Select an emotion</option>
                  {mood.map((r) => (
                    <option value={r.id} key={r.id}>
                      {r.emotion}
                    </option>
                  ))}
                </select>
                
              </fieldset>
              
              
            </form>
            
          </section>
          
          
        </section>
      </>
    );
}
