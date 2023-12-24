import { useQuery } from "react-query";
import getProfil from "../api/getProfil";

const useProfil = (username: string | undefined) => {
  const profil = useQuery({
    queryKey: ["user", username],
    queryFn: () => getProfil(username),
  });

  return {
    data: profil.data,
    isLoading: profil.isLoading,
    error: profil.error,
  };
};

export default useProfil;
