import { useNavigate } from "react-router-dom"
import { register, login } from "../services/user"
import useMessage from "./useMessage"

const useUser = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const registerUser = async(data) => {
    const { message, error} = await register(data);
    if (message === "success") {
      navigate('/');
      showMessage("Registered new user");
    }
    if (error) showMessage(message, "error");
  }

  const loginUser = async (data) => {
    const { message, error } = await login(data);
    if (message === "success") navigate('/');
    if (error) showMessage(message, "error");
  }

  return {
    registerUser,
    loginUser
  }
}

export default useUser