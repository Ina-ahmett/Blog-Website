import { useState } from "react";

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

    return (
        <div>
            <button onClick={handleOPen} className={`${isOpen === true? "hidden": ""} bg-blue-700 text-white fixed bottom-2 right-2 w-12 h-12 text-2xl rounded-full shadow-lg flex items-center justify-center cursor-pointer`}>
                <i className="fa-solid fa-plus"></i>
            </button>
            <div className={`${isOpen === true? "flex": "hidden"} mt-56 ml-[600px] bg-blue-200 w-80 px-8 pt-16 p-10 rounded-lg relative`}>
                <i onClick={handleClose} className={` fa-solid fa-x text-2xl absolute top-3 right-3 cursor-pointer`}></i>
                <form action="">
                    <input type="text" placeholder="Title of image:" className="px-2 py-1 w-60 bg-white rounded-lg border-none" />
                    <input type="file" className="mt-2" /> <br />
                    <button className="px-3 py-2 rounded-lg mt-5 ml-48 bg-blue-300 text-white"> Post </button>
                </form>
            </div>
        </div>
    );
}
export default Forms;
