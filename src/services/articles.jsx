export const getAllArticles = async () => {

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/article`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })

  const result = await response.json();

  return result
}

export const createArticle = async (data) => {

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/article`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();

  return result

}