import { useNavigate } from "react-router-dom"
import { register, login } from "../services/user"

const useUser = () => {
  const navigate = useNavigate();

  const registerUser = async(data) => {
    const result = await register(data);
    if (result?.message === "success") navigate('/');
  }

  const loginUser = async (data) => {
    const result = await login(data);
    if (result?.message === "success") navigate('/');
  }

  return {
    registerUser,
    loginUser
  }
}

export default useUser