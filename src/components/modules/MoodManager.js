const dataURL = "http://localhost:8088"

export const GetMoods = () =>{
    return fetch(`${dataURL}/emotions/`)
        .then(res => res.json())
}