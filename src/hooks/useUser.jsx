import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { register, login } from "../services/user"
import useMessage from "./useMessage"

const useUser = () => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const registerUser = async(data) => {
    const { user, message, error} = await register(data);
    if (user) {
      updateUser(user);
      navigate('/');
      showMessage("Registered new user");
    }
    if (error) showMessage(message, "error");
  }

  const loginUser = async (data) => {
    const { user, message, error } = await login(data);
    if (user) {
      updateUser(user);
      navigate('/');
    }
    if (error) showMessage(message, "error");
  }

  return {
    registerUser,
    loginUser
  }
}

export default useUser