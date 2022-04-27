import {Settings} from "../../Settings.js"
//upload or download after image
const dataURL = `https://api.cloudinary.com/v1_1/${Settings.cloudName}/image/`

export const uploadImage = (imageFile) =>{
    return fetch(`${dataURL}/upload/${imageFile}`,{
        method: "POST"
    }).then(res => console.log(res))
}

export const importImages = () =>{
    return fetch(`${dataURL}/`)
}