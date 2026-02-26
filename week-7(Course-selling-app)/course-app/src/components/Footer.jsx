import Youtube from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

export default function Footer(){ 
    return<div className="h-[70vh] bg-black p-10 "> 
            <div className="flex items-center justify-around"> 
                <div><p className='font-extrabold text-xl'>100<span className='text-red-600'>x</span>Devs</p></div>
                <div>
                    <p>Terms & Conditions</p>
                    <p>Privacy & Policy</p>
                    <p>Refund & Cancellation</p>
                </div>
                <div> 
                    <img src={Youtube}/>
                    <img src={Twitter}/>
                    <img src={Instagram}/>
                </div>
            </div>
         </div>
}