export const register = async (data) => {

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();

  return result
}

export const login = async (data) => {

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();

  return result
}