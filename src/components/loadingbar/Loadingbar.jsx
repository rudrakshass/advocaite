import { BarLoader } from "react-spinners";

export default function Loadingbar(){
    return(
        <div>
            <div className="m-0 flex place-items-center justify-center min-h-screen flex-col">
            <h1 className='font- text-10xl subpixel-antialiased font-black text-primary font-gugi'>A</h1>
            <BarLoader
                color="#0E8388"
                cssOverride={{}}
                loading
                speedMultiplier={1}
                width={200}
                />
            </div>
        </div>
    )
}