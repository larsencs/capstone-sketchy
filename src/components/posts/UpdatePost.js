import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"


export const UpdatePost = () =>{

    const navigate = useNavigate()

    const handleDeletePost = () =>{

    }

    const handleEditPost = () =>{

    }
    return (
    <>
        <img src="https://picsum.photos/300/400"></img>
        <form>
            <fieldset>
                
                <input type="text" id="prompt" placeholder="chosen prompt"></input>
                <input type="text" id="mood" placeholder="mood"  ></input>
                <input type="text" id="title" placeholder="title" ></input>
                <input type="text" id="image" placeholder="image" ></input>
                <input type="text" id="description" placeholder="description"></input>
                <button>Delete</button>
                <button type="button" >Submit</button>
            </fieldset>
        </form>
    </>)

}