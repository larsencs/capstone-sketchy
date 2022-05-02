import { GetMoods } from "../modules/MoodManager"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { getEmoPrompts, getSentences, getPrompts } from "../modules/PromptManager"
import { getPosts } from "../modules/PostManager"
import "../styles/prompts/generate.css"
import { Prompts } from "../prompts/Prompts"

export const Generate = ({getLoggedInUser}) =>{

    const [prompt, updatePrompt] = useState([])
    const [emoPrompt, updateEmoPrompt] = useState([])
    const [mood, updateMood] = useState([])
    const [sentences, updateSentences] = useState([])
    const [sortedPrompts, updateSortedPrompts] = useState([])
    const [generated, updateGenerated] = useState()
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
    const [show, updateShow] = useState(false)
    const [selection, updateSelection] = useState({

    })

    const navigate = useNavigate()

    useEffect(()=>{
        GetMoods()
            .then(fetchedMood => updateMood(fetchedMood))
    },[])

    useEffect(()=>{
        getPrompts().then(res => updatePrompt(res))
    },[])

    useEffect(()=>{
        getEmoPrompts().then(res => updateEmoPrompt(res))
    },[])

    useEffect(()=>{
      getSentences().then( res => updateSentences(res))
    },[])

    // const controlInput = (event) =>{
    //     const emotion = {...gen}

    //     emotion[event.target.id] = event.target.value
    //     updateGen(emotion)

    // }

    const controlBtn = (event) =>{


      let target = event.target.id;

      if (target === "happy") {
        happy ? updateHappy(false) : updateHappy(true);
        updateSelection(happy)
      }
      if (target === "sad") {
        sad ? updateSad(false) : updateSad(true);
        updateSelection(sad)
      }
      if (target === "angry") {
        angry ? updateAngry(false) : updateAngry(true);
        updateSelection(angry)
      }
      if (target === "neutral") {
        neutral ? updateNeutral(false) : updateNeutral(true);
        updateSelection(neutral)
      }
      if (target === "calm") {
        calm ? updateCalm(false) : updateCalm(true);
        updateSelection(calm)
      }
      if (target === "scared") {
        scared ? updateScared(false) : updateScared(true);
        updateSelection(scared)
      }
      if (target === "anxious") {
        anxious ? updateAnxious(false) : updateAnxious(true);
        updateSelection(anxious)
      }
      if (target === "pencil") {
        pencil ? updatePencil(false) : updatePencil(true);
        updateSelection(pencil)
      }
      if (target === "ink") {
        ink ? updateInk(false) : updateInk(true);
        updateSelection(ink)
      }
      if (target === "paint") {
        paint ? updatePaint(false) : updatePaint(true);
        updateSelection(paint)
      }
      if (target === "people") {
        people ? updatePeople(false) : updatePeople(true);
        updateSelection(people)
      }
      if (target === "places") {
        places ? updatePlaces(false) : updatePlaces(true);
        updateSelection(places)
      }
      if (target === "things") {
        things ? updateThings(false) : updateThings(true);
        updateSelection(things)
      }
      updateState()
    }

    const updateState = () =>{
      const selections = {
        happy: happy,
        sad: sad,
        calm: calm,
        angry: angry,
        neutral: neutral,
        scared: scared,
        anxious: anxious,
        pencil: pencil,
        ink: ink,
        paint: paint,
        people: people,
        places: places,
        things: things
      }

      updateSelection(selections)
    }

    const sortPosts = () =>{
        let tempArr = []
        let emoArr = []
        let emoPromptArr = []
        let sortedArr = []
        if(happy === true){
          tempArr.push("happy")
        }
        if(sad === true){
          tempArr.push("sad")
        }
        if(calm === true){
          tempArr.push("calm")
        }
        if(angry === true){
          tempArr.push("angry")
        }
        if(neutral === true){
          tempArr.push("neutral")
        }
        if(scared === true){
          tempArr.push("scared")
        }
        if(anxious === true){
          tempArr.push("anxious")
        }

        //this works
        for(let emo of mood){
          for(let temp of tempArr){
            if(emo.emotion === temp){
              emoArr.push(emo.id)
            }
          }
        }
        for(let emo of emoArr){
          for(let emote of emoPrompt){
            if(emo === emote.emotionId){
              emoPromptArr.push(emote)
            }
          }
        }
        for(let emote of emoPromptArr){
          for(let thing of prompt){
            if(emote.promptId === thing.id){
              sortedArr.push(thing)
            }
          }
        }
        let index = Math.floor(Math.random()*sortedArr.length)
        const sorted = sortedArr[index]
        const madnessSort = sortedArr
        updateGenerated(sorted)
        console.log("madnessSort", madnessSort)
        updateSortedPrompts(madnessSort)

    }

    const sortMadness = () =>{
      console.log("in madness", sortedPrompts)
      const indexOne = Math.floor(Math.random()* sortedPrompts.length)
      const indexTwo = Math.floor(Math.random()* sortedPrompts.length)
      const madnessIndex = Math.floor(Math.random() * sentences.length)

      const sentence = sentences[madnessIndex]

      if(sentence.fragmentTwo === "" || sentence.fragmentOne === ""){
        sentence.insertOne = sortedPrompts[indexOne]?.prompt
      }else{
        sentence.insertOne = sortedPrompts[indexOne]?.prompt
        sentence.insertTwo = sortedPrompts[indexTwo]?.prompt
      }

      const finishedSentence = {
        "prompt" : sentence.fragmentOne + sentence.insertOne + sentence.fragmentTwo + sentence.insertTwo
      }
      updateGenerated(finishedSentence)

    }

    const handleClick = () =>{
        //Navigates to prompt and passes an object named state as a prop, so that prompt can utilize the results of generate


        sortPosts();
        updateShow(true)
        // setTimeout(nav, 500)
        // <Prompts prompt={prompt}/>
        

    }

    const handleMadness = () =>{
      sortPosts();
      sortMadness()
      updateShow(true)
    }

    const componentArr = [
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
      <div className="generate_btn_div">
        <p>Generate</p>
      <div className="madness_btn">
        <button id="madness" type="button" onClick={handleMadness}>MADNESS</button>
        <button id="generate" type="button" onClick={handleClick}>MUNDANE</button>
        </div>
      </div>
      </div>
        <form>
        
          <fieldset>
          </fieldset>
          
          
        </form>
        
      </section>
      
      
    </section>,
    <Prompts prompt={generated} getLoggedInUser={getLoggedInUser} show={show} setUpdateShow={updateShow} emo={emoPrompt}/>
    ]

    return (
      <>
          {show? componentArr[1] : componentArr[0]}
      </>
    );
}
