const dataURL = "http://localhost:8088"

export const getPromptById = (id) =>{
    return fetch(`${dataURL}/prompts/${id}`)
        .then(res => res.json())
}
export const getPromptByMood = (id) =>{
    return fetch(`${dataURL}/prompts?emotionId=${id}`)
        .then(res => res.json())
}

