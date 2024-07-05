import { toast } from "react-toastify"

const useMessage = () => {

  const showMessage = (message, type = "success") => {

    const options = {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "customId",
    }

    if (type === "success") toast.success(message, options);
    else if (type === "error") toast.error(message, options);
    
  }

  return {
    showMessage
  }
}

export default useMessage