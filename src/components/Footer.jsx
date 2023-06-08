

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="w-full py-4 flex justify-center items-center">
            <h1 className="font-semibold text-zinc-400">Copyright © {currentYear}</h1>
        </footer>
    )
}