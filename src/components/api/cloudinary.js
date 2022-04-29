import {Settings} from "../../Settings.js"
//upload or download after image
const dataURL = `${Settings.proxy}https://api.cloudinary.com/v1_1/${Settings.cloudName}/image/`

export const uploadImage = (imageFile) =>{
    console.log("fetch", imageFile)
    return fetch(`${dataURL}upload/${imageFile}`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(imageFile)
    }).then(res => console.log(res))
}

export const importImages = () =>{
    return fetch(`${dataURL}/`)
}