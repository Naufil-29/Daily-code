import img from '../assets/harkirat-transparent.png';
import Button from './Button';
import Input from './Input';
import { X } from 'lucide-react';

export default function SignUp() { 

    return( 
        <div className="main w-screen h-screen bg-gray-300 flex items-center justify-center"> 
            <div className="card w-[70%] h-[80%] bg-white rounded-xl  p-8 flex items-center justify-center"> 
                <div className="img-section relative w-full h-full rounded-xl flex items-center justify-center bg-linear-to-br from-[#020A3F] via blue-900 to-[#020A3F] text-white">
                    <div className='absolute top-0  p-4 w-[90%]'>
                        <h1 className='text-4xl font-bold pb-5'>Become a 100x developer</h1> 
                        <h1 className='text-xl font-semibold ' >Hands-on bootcamps, real-porjects - start building today</h1>
                    </div>
                    <img className='w-80 absolute bottom-0' src={img}></img>
                </div>
                <div className="form-section w-full h-full border rounded-xl p-5">
                     <div className='header w-full h-10 border-none text-center flex items-center justify-center'> 
                        <p className='w-[95%] font-extrabold text-2xl'>100<span className='text-red-600'>x</span>Devs</p>
                        <div className='w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white border-none'><X/></div>
                     <div></div>
                     </div>
                <div className='form-content '> 
                    <p className='heading text-xl font-bold pb-10'>Create your account</p>

                    <div className='form-input'> 
                        <div className="username-input"> 
                            <Input heading="Username" placeholder="Enter your username" />
                        </div>
                        <div className="email-input"> 
                            <Input heading="Email" placeholder="Enter your email" />
                        </div>
                        <div className="password-input"> 
                            <Input heading="Password" placeholder="Enter your password" />
                        </div>
                        <div className='singup-button'> 
                            <Button text="Signup"/>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}