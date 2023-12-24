import { useParams } from "react-router-dom";
import useProfil from "../hooks/useProfil";
import Loader from "../../loader/component/Loader";

const CardProfil = () => {
  const params = useParams();
  const { isLoading, data } = useProfil(params.username);
  console.log(data);
  if (isLoading) {
    <Loader />;
  }

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="w-3/4 h-3/4 bg-red-400"></div>
      {/* <div className="w-full mt-8">
        <CardProfilRecipe recipes={recipes} />
      </div> */}
    </section>
  );
};

// {recipes === null ? (
//   <div></div>
// ) : (
//   <div>
//     <div className="w-full flex flex-col md:flex-row">
//       <div className="w-full h-44 flex justify-center md:justify-normal md:w-1/3">
//         <img src={defaultAccount} className="rounded-full" alt="" />
//       </div>
//       <div className="mt-3 flex flex-col w-full items-center md:mt-0 md:items-start md:justify-center md:w-1/3 lg:w-2/3">
//         <h1 className="text-3xl">{user?.username}</h1>
//         <div className="flex h-min flex-row">
//           <p className="text-blue-400">{user?.email}</p>
//           <p className="text-black hidden lg:flex">
//             {" "}
//             &nbsp; - Utilisateur
//           </p>
//         </div>
//         <p className="mt-2 text-[#ff9e44] font-bold">
//           {/* {getGradeOfUser(10)} */}
//         </p>
//       </div>
//     </div>
//     <div className="w-full mt-6">
//       <div className="w-full border-b-[1px] flex justify-center lg:justify-normal ">
//         <p className="px-2 pb-2 font-bold cursor-pointer hover:font-bold">
//           Créations
//         </p>
//         <p className="px-2 pb-2 cursor-pointer hover:font-bold">
//           Account
//         </p>
//         <p className="px-2 pb-2 cursor-pointer hover:font-bold">
//           Favoris
//         </p>
//       </div>
//     </div>
// q          </div>
// )}

export default CardProfil;
