

import { useState } from 'react'

function App() {
  const [output, setOutput] = useState("")
  let alphabets = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

  function appendString(alphabet){
    let varOcg = output + alphabet;

    let varFilterCg = /(.)\1{5}/g;
    varOcg = varOcg.replace(varFilterCg, "__");

    varOcg = varOcg.replace(/(.)\1{2}/g, "_")

    setOutput(varOcg)
  }

  return (
    <div>
    {alphabets.map((alphabet) =>{ 
     return <button key={alphabet} onClick={() => appendString(alphabet)} className="w-20 h-20 bg-black text-white m-5 rounded-lg">{alphabet}</button>
    })}
     <div id='alphabetString' className='border-2 w-[90%] h-20 '>{output}</div> 
    </div>
  )
}

export default App
