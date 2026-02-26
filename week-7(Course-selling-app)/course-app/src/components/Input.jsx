

export default function Input({heading, placeholder}){ 
    return<div className='pb-5'>
            <div className="font-bold">{heading}</div>
            <input className='border w-full p-3 rounded-2xl' type='text' placeholder={placeholder}></input>
        </div>
    
}