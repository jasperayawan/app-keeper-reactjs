

export default function Note(props){

    const handleClick = () => {
        props.onDelete(props.id)
    }

    return(
        <div className="">
            <div key={1} className="rounded-md p-3 bg-white flex justify-between items-center md:flex-col">
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </div>
                <div className="flex justify-center items-center">
                    <button 
                        onClick={handleClick}
                        className="bg-orange-500 font-semibold mt-4 rounded-md py-1 px-2">Delete</button>
                </div>
            </div>
        </div>
    )
}