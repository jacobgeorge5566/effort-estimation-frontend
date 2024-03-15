export default function Home() {
  return (
    <div className=" mb-32">
      <p className=" text-3xl mb-5 font-semibold">Welcome to the Effort Estimation Analysis webpage</p>
      <p className=" w-[800px]  mb-3 text-wrap text-xl"> 
      "This interactive platform provides insights into the effort estimation dataset using various machine learning models. Whether you&apos;re a data scientist, project manager, or interested in predictive modeling, this dashboard offers valuable insights and tools to understand and analyze effort estimation data."
    </p>
    <p className=" text-2xl mb-3 font-medium">About the Dataset:</p>
    <p className=" w-[800px]  mb-3 text-wrap text-lg">The dataset used in this analysis contains information about effort estimation for software development projects. It includes features such as project size, complexity, team composition, and more, along with the actual effort spent on each project. This data is crucial for understanding the factors influencing project effort and for improving estimation accuracy.
    </p>
    
    </div>
  );
}
