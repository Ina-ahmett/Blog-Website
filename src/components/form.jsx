import { useRef, useState } from "react";
import Display from "./display";

function Forms() {
    const [isOpen, setOpen]= useState(false)

    const handleOPen=()=>{
        setOpen(true)
        document.body.style.backgroundColor = "#7CB9E8"
    }

    const handleClose=()=>{
        setOpen(false)
        document.body.style.backgroundColor = "white"

    }

    // soo bandhigida bloging waye qeybtaan
    const [title, setTitle]= useState(" ")
    const [image, setImage]= useState(null)
    const [post, setPost]= useState([])
    // Wxa kusoo darsana function ii tirtiraayo history of images
    const imageRef = useRef()
    
    const handlePost = (e)=>{
        e.preventDefault()
        const newPost = {title, image}

        if(title != " " && image != " "){
            setPost([...post, newPost])
            alert("created new post..")
            setTitle(" ")
            imageRef.current.value = null
            handleClose()
        }
    }


    return (
        <div>
            <button onClick={handleOPen} className={`${isOpen === true? "hidden": ""} bg-blue-700 text-white fixed bottom-2 right-2 w-12 h-12 text-2xl rounded-full shadow-lg flex items-center justify-center cursor-pointer`}>
                <i className="fa-solid fa-plus"></i>
            </button>
            <div className={`${isOpen === true? "flex": "hidden"} sm:mt-56 mt-44 sm:ml-[600px] ml-8 bg-blue-200 w-80 px-8 pt-16 p-10 rounded-lg relative`}>
                <i onClick={handleClose} className={` fa-solid fa-x text-2xl absolute top-3 right-3 cursor-pointer`}></i>
                <form action="">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title of image:" className="px-2 py-1 w-60 bg-white rounded-lg border-none" />
                    <input ref={imageRef} onChange={(event)=> setImage(event.target.files[0])} type="file" className="mt-2" /> <br />
                    <button onClick={handlePost} className="px-3 py-2 rounded-lg mt-5 ml-48 bg-blue-300 text-white"> Post </button>
                </form>
            </div>
            {
                post.map((item)=>{
                    return isOpen === true? " ": <Display img={URL.createObjectURL(item.image)} title={item.title}/>
                })
            }
        </div>
    );
}
export default Forms;
