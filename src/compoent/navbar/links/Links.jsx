import Link from "next/link";
import Navlink from "./Navlink";


const Links = () => {
  const session= true
  const isadmin=false

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Predict",
      path: "/predict",
    },
   
  ];

  return (
    <div>
      {links.map((link, index) => (
        <Navlink item={link} key={index}></Navlink>
      ))}
    </div>
  );
};

export default Links;
