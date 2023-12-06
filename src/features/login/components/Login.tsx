import { FunctionComponent, useState } from "react";
import logo from "../../../../public/assets/foodsUp.png";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/postLogin";
import { useDispatch, useSelector } from "react-redux";
import { UserState, setUser } from "../../redux/user/userReducer";


const Login: FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  
  const user = useSelector((state: UserState) => state.user);

  console.log(user);
  const dispatch = useDispatch();



  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ("Enter" === event.key) {
      handleLogin();
    }
  };

  
  const handleLogin =  () => {
    setIsLoading(true);
    postLogin(email, password).then((response) => {
        dispatch(setUser(response));
    }).finally(() => {
        setIsLoading(false);
    }).catch((error) => {
        setError(error.message);
    });
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="rounded-md z-0  item-login flex items-center flex-col border border-black max-md:border-none"
        action=""
      >
        <div className="flex w-full justify-center mt-12 mb-8 max-md:hidden">
          <p className="font-bold font-anton text-2xl">FOODS&nbsp;</p>
          <p className="font-bold font-anton text-2xl text-foods-orange">UP</p>
        </div>
        <img src={logo} className="hidden max-md:flex w-48" alt="" />
        <input
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            onPressEnter(event);
          }}
          className="w-96 p-3 mb-6 border mx-12"
          type="text"
          placeholder="Nom d'utilisateur ou email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            onPressEnter(event);
          }}
          className="w-96 p-3 mb-1 border"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.length > 0 && <p className=" text-xs text-red-500">{error}</p>}
        <button
          type="button"
          style={{backgroundColor:'#ff9e44'}}
          onClick={() => handleLogin()}
          className="w-96 py-2 mt-6 rounded-lg text-white text-sm mb-6"
        >
          {isLoading ? "Loading ..." : "Se connecter"}
        </button>
        <div className="flex pb-6 w-full h-3 justify-center items-center">
          <div className="trait"></div>
          <p className="where">ou</p>
          <div className="trait"></div>
        </div>
        <button
          type="button"
          style={{backgroundColor:'#ff9e44'}}
          onClick={() => navigate('/subscriptions')}
          className="w-96 py-2 rounded-lg text-white text-sm mb-12"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default Login;