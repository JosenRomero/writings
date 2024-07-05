import { useNavigate } from "react-router-dom"
import { register } from "../services/user"

const useUser = () => {
  const navigate = useNavigate();

  const registerUser = async(data) => {
    const result = await register(data);
    if (result?.message === "success") navigate('/');
  }

  return {
    registerUser
  }
}

export default useUser