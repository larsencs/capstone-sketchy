const dataURL = "http://localhost:8088"
const baseUrl ="/api/UserProfile"

export const getUserByFirebaseId = (firebaseId) =>{
    return fetch(`${baseUrl}/${firebaseId}`)
        .then(res => res.json())
}

//TO-BE-DELETED Functions
export const getUserById = (id) =>{
    return fetch(`${dataURL}/users?id=${id}`)
        .then(res => res.json())
}