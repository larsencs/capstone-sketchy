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