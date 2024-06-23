import {React, useState,useMemo} from 'react'

const App = () => {
  const [insetValue,setInsertValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const AddChar = (text)=>{
    setInsertValue(c => c + text)
    setDisplayValue(c => c + text)

  };

  const HandleOperation= (text)=>{
    setInsertValue(c => c + text)
    setDisplayValue("")
  };
  
  const clearSpace = () =>{
    setInsertValue("")
    setDisplayValue("")
  }

  

  const HandleCalculate = () => {
    try {
      const finalValue = eval(insetValue);
      setDisplayValue(finalValue);
      setInsertValue(finalValue.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };
  

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
            <input
                type="text"
                id="display"
                value={displayValue}
                readOnly
                className="w-full bg-gray-200 p-3 rounded text-right text-2xl font-digital-7"
            />
        </div>
        <div className="grid grid-cols-4 gap-2">
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("7")}>7</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("8")}>8</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("9")}>9</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> HandleOperation("/")}>/</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("4")}>4</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("5")}>5</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("6")}>6</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> HandleOperation("*")}>*</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("1")}>1</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("2")}>2</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("3")}>3</button> 
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> HandleOperation("-")}>-</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("0")}>0</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar(".")}>.</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> clearSpace()} >C</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> HandleOperation("+")}>+</button>
            <button className="bg-red-500 text-white p-4 rounded text-xl col-span-2" onClick={()=> HandleCalculate()}>=</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar("(")}>(</button>
            <button className="bg-blue-500 text-white p-4 rounded text-xl" onClick={()=> AddChar(")")}>)</button>

        </div>
    </div>
  </div>
  )
}

export default App
