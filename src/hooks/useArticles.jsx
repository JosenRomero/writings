import { useEffect, useState } from "react"
import { getAllArticles } from "../services/articles"

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    async function init() {

      try {

        const result = await getAllArticles();

        if(result?.message) setError(true);
        else setArticles(result);
        
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    }

    init();

  }, [])

  return {
    loading,
    error,
    articles
  }
}

export default useArticles