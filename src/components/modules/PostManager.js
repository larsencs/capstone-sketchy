const dataURL = "http://localhost:8088"


export const getPosts = () =>{
    return fetch(`${dataURL}/posts?_expand=prompt&_expand=emotion`)
        .then(res => res.json())
}

export const savePost = (postObj) =>{
    return fetch(`${dataURL}/posts/`,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postObj)
    }).then(res => res.json())

}
export const getPostByUserId = (userId) =>{
    return fetch(`${dataURL}/posts?userId=${userId}&_expand=prompt&_expand=emotion`)
        .then(res => res.json())
}

export const completePost = (postObj) =>{
    return fetch(`${dataURL}/posts/${postObj.id}`,{
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postObj)
    }).then( res => res.json())
}