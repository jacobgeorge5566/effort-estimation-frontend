"use client";
import Pred from "@/compoent/pred/Pred";
import axios from "axios";
import { useState } from "react";
const ContactPage = () => {
  const [NOCA, setNOCA] = useState(0);
  const [NOCM, setNOCM] = useState(0);
  const [NOCSP, setNOCSP] = useState(0);
  const [ECP2, setECP2] = useState(0);
  const [predictions, setPredictions] = useState(false);
  const [ka, setKa] = useState();
  const [selectedOption, setSelectedOption] = useState("linear"); // Add selectedOption state
  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "NOCA":
        setNOCA(value);
        break;
      case "NOCM":
        setNOCM(value);
        break;
      case "NOCSP":
        setNOCSP(value);
        break;
      case "ECP2":
        setECP2(value);
        break;
      default:
        break;
    }
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  


  const handleclick = async () => {
    const obj = {
      "NOCA": NOCA,
      "NOCM": NOCM,
      "NOCSP": NOCSP,
      "ECP2": ECP2,
      "model": selectedOption,
    };
    console.log(obj);
    
    let url = "https://effort-estimation-backend.onrender.com/predict";
    
    try {
      const response = await axios.post(url, obj);
      console.log(response.data.predictions); 
      setKa(response.data)
      // Access response data using response.data
      setPredictions(true)
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <>
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6 mb-4 mt-[50px] w-[400px]">
      <select className="text-2xl font-semibold mb-7 text-black" onChange={handleSelectChange}>
        <option value="linear">Linear</option>
        <option value="SVR">SVR</option>
        <option value="SMO">SMO (POLYNOMIAL)</option>
        <option value="DecisionTree">Decision Tree</option>
        <option value="MLP">MLP</option>
      </select>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-black text-sm font-semibold mb-2"
        >
          NOCA
        </label>
        <input
          type="number"
          id="NOCA"
          name="NOCA"
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded-md  text-black "
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tag"
          className="block text-black text-sm font-semibold mb-2"
        >
          NOCM
        </label>
        <input
          type="number"
          id="NOCM"
          name="NOCM"
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded-md  text-black"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tag"
          className="block text-black text-sm font-semibold mb-2"
        >
          NOCSP
        </label>
        <input
          type="number"
          id="NOCSP"
          name="NOCSP"
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded-md  text-black"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tag"
          className="block text-black text-sm font-semibold mb-2"
        >
          ECP2
        </label>
        <input
          type="number"
          id="ECP2"
          name="ECP2"
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded-md  text-black"
        />
      </div>
      <button
        onClick={handleclick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Predict
      </button>
    </div>
    <div>
      {
        predictions ? (
          <Pred value={ka.predictions} modle={ka.model}></Pred>
        ):(
          <div></div>
        )
      }
    </div>
    </>
    
  );
};

export default ContactPage;
