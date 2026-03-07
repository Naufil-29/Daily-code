import { useState } from "react";
import petBg from "../assets/petBg.jpg";
import { Link } from "react-router-dom";
import { Headers } from "./headers";

export const HomePage = ({petsInfo, setPetsInfo}) => { 
    // const [petInfo, setPetInfo] = useState([])
  const [formData, setFormData] = useState({ 
    PetName: "",
    PetType: "",
    Breed: "",
    Name: "",
    Email: "",
    Phone: ""
  });

  const handleChange = (e) => { 
    const {name, value} = e.target;

    setFormData((prev) => ({ 
      ...prev,
      [name]: value
    }))
  };

  const onSubmit = () => {
   setPetsInfo((prev) => [...prev, formData]);

    console.log("ALL pets", [...petsInfo, formData]);
  setFormData({
    PetName: "",
    PetType: "",
    Breed: "",
    Name: "",
    Email: "",
    Phone: ""
  });

  }

  return (
    <div className="main-div w-screen h-screen flex items-center justify-center bg-black">
      <div className="absolute top-0">
      <Headers/>
      </div>
      <img className="realtive w-full h-full object-contain" src={petBg}/>
      <div className="form  flex flex-col gap-10 p-10 absolute w-[40%] h-[80%] text-black rounded-2xl bg-white/20 backdrop-blur-sm"> 
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="PetName" name="PetName" onChange={handleChange} value={formData.PetName}></input>
        </div>
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="PetType" name="PetType" onChange={handleChange} value={formData.PetType}></input>
        </div>
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="Breed" name="Breed" onChange={handleChange} value={formData.Breed}></input>
        </div>
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="YourName" name="Name" onChange={handleChange} value={formData.Name}></input>
        </div>
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="Email" name="Email" onChange={handleChange} value={formData.Email}></input>
        </div>
        <div> 
          <input className="py-3 w-[90%] border rounded-2xl p-4" type="text" placeholder="Phone" name="Phone" onChange={handleChange} value={formData.Phone}></input>
        </div>
        <div className="flex items-center justify-between"> 
          <button onClick={onSubmit} className=" py-4 bg-white rounded-2xl text-xl font-bold"> 
            Submit Info
          </button>
          <Link to="/info">Go to Info table</Link>
        </div>
      </div>
    </div>
  )
}