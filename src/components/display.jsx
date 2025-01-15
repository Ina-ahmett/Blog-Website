function Display(props){
    return(
        <div className="border-2 border-black w-[300px] p-2 sm:ml-80 ml-10 my-10">
            <img className="w-[300px]" src={props.img} />
            <h1 className="text-4xl font-semibold">{props.title}</h1>
        </div>
    )
}
export default Display;