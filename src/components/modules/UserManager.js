const dataURL = "http://localhost:8088"


export const getUserById = (id) =>{
    return fetch(`${dataURL}/users?id=${id}`)
        .then(res => res.json())
}