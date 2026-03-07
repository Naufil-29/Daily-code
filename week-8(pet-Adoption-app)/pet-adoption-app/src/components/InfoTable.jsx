import { Link } from "react-router-dom";
import petBg from "../assets/petBg.jpg";
import { Headers } from "./headers";

export const InfoTable = ({ petsInfo }) => {
  console.log("from info-page", petsInfo);

  if (petsInfo.length === 0) {
    return <p className="text-center text-xl">No pets added</p>;
  }

  return (
    <div className="flex justify-center">

      <img className="relative" src={petBg}/>
      <div className="absolute top-0">
      <Headers/>
      </div>

      <table className="absolute top-30 border border-black w-[80%] text-center">

        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Pet Name</th>
            <th className="border p-2">Pet Type</th>
            <th className="border p-2">Breed</th>
            <th className="border p-2">Owner</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>

        <tbody>
          {petsInfo.map((pet, index) => (
            <tr key={index} className="hover:bg-gray-100">

              <td className="border p-2">{pet.PetName}</td>
              <td className="border p-2">{pet.PetType}</td>
              <td className="border p-2">{pet.Breed}</td>
              <td className="border p-2">{pet.Name}</td>
              <td className="border p-2">{pet.Email}</td>
              <td className="border p-2">{pet.Phone}</td>

            </tr>
          ))}
        </tbody>

      </table>
          <Link className="absolute top-100 bg-white rounded-2xl px-5 py-4" to="/">Go back to Form</Link>
    </div>
  );
};