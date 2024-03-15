

const Pred = (props) => {
  return (
<div className="bg-white text-black font-semibold rounded-lg flex justify-center w-[500px] mx-auto p-2">
     <div >
     <h1 className=" text-2xl"> Predicted value using {props.modle} is:</h1>
      <h1 className=" text-center mt-4 text-[20px]">{props.value}</h1>
    </div>
   </div>
  )
}

export default Pred
