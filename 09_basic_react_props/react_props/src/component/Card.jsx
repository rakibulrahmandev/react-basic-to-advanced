
function Card(props) {

    return (
        <div className="w-[80%] max-w-[300px] min-h-[350px] bg-[url('https://images.pexels.com/photos/33124609/pexels-photo-33124609.jpeg')] bg-cover bg-no-repeat bg-center rounded-md relative overflow-hidden">
            <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-white/0 to-gray-950/80 flex items-end p-4">
                <div>
                    <h1 className="text-white font-semibold text-2xl mb-2">{props?.name}</h1>
                    <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, qui! Laboriosam ea soluta doloremque corrupti,.</p>
                    <button className="text-white bg-slate-800 py-2 px-5 rounded-md mt-5 cursor-pointer">View Profile</button>
                </div>
            </div>
        </div>
    )
};

export default Card;