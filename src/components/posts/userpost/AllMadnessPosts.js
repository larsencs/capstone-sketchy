export const AllMadnessPosts = ({madness}) =>{

    return(
        <div>
                    <div className="post_div" style={{backgroundImage:`linear-gradient(
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          ),url(${madness?.image})`}}></div>
            <div ></div>
            <div>
                <h4>{madness?.title}</h4>
                <p>{madness?.description}</p>
            </div>
            <div>
                <p>{madness?.prompt}</p>
            </div>
        </div>
        
    )
}