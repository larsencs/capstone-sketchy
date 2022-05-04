import {Settings} from "../../Settings.js"
import { Cloudinary } from "cloudinary-core"
//upload or download after image
const cloud = new Cloudinary({cloud_name: `${Settings.cloudName}`, secure: true})
const dataURL = `https://api.cloudinary.com/v1_1/${Settings.cloudName}/image/`

// const cloudinary = require("cloudinary").v2;

export const uploadImage = (data) =>{
    console.log("fetch", data)
    return fetch(`${dataURL}upload/Sketchy/`,{
        method: "POST",
        body: data

    }).then(res => console.log(res))
}

export const importImages = () =>{
    return fetch(`${dataURL}/`)
}

export const uploadCloud = (imageFile) =>{
    cloud.uploader.upload(`${imageFile}`, 
{ public_id: `looksSketchy/${Settings.cloudName}` },
function(error, result) {console.log(result, error); });
}