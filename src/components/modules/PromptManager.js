const dataURL = "http://localhost:8088"

export const getPromptById = (id) =>{
    return fetch(`${dataURL}/prompts/${id}`)
        .then(res => res.json())
}
export const getPromptByMood = (id) =>{
    return fetch(`${dataURL}/prompts?emotionId=${id}`)
        .then(res => res.json())
}

export const getPrompts = () =>{
    return fetch(`${dataURL}/prompts/`)
        .then(res => res.json())
}

export const getEmoPrompts = (emotionId) =>{
    return fetch(`${dataURL}/emoPrompts?emotionId=${emotionId}`)
        .then(res => res.json())
}

