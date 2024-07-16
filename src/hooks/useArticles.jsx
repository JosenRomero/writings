import { useEffect, useState } from "react"
import { getAllArticles, createArticle } from "../services/articles"
import useMessage from "./useMessage"

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { showMessage } = useMessage();

  useEffect(() => {

    async function init() {

      try {

        const result = await getAllArticles();

        if(result?.message) {
          setError(true);
        }
        else {
          result.reverse();
          setArticles(result);
        }
        
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    }

    init();

  }, [])

  const createOneArticle = async (data) => {

    try {

      const result = await createArticle(data);

      if(result?.message) {
        showMessage(result.message, "error");
      } else {
        showMessage("added a new article");
        setArticles([result, ...articles]);
      }

    } catch (error) {
      showMessage("Something went wrong", "error");
    }

  }

  return {
    loading,
    error,
    articles,
    createOneArticle
  }
}

export default useArticles