export const AllMadnessPosts = ({madness}) =>{

    return(
        <div className="yet_another_post_container">
            <div className="single_post_container">
            <div className="post_div" style={{backgroundImage:`linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${madness?.image})`}}></div>
            <div className="post_text_container">
                <h4>{madness?.title}</h4>
                <p>{madness?.description}</p>
            </div>
            <div className="post_prompt_container" id={madness.emotion.emotion}>
                <p>{madness?.prompt}</p>
            </div>
            </div>
        </div>
        
    )
}