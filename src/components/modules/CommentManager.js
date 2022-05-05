const dataURL = "http://localhost:8088"

export const postComment = (commentObj) =>{
    return fetch(`${dataURL}/comments/`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(commentObj)

    }).then(res => res.json())
}

export const postMadnessComment = (commentObj) =>{
    return fetch(`${dataURL}/comments/`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(commentObj)

    }).then(res => res.json())
}

export const getComments = () =>{
    return fetch(`${dataURL}/comments/`)
        .then(res => res.json())
}