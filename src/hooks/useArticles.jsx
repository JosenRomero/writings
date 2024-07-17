import { useState, useCallback } from "react"
import * as articleService from "../services/articles"
import useMessage from "./useMessage"

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { showMessage } = useMessage();

  const getAllArticles = useCallback(async () => {

    try {

      const result = await articleService.getAllArticles();

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

  }, [])

  const createOneArticle = async (data) => {

    try {

      const result = await articleService.createArticle(data);

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
    getAllArticles,
    createOneArticle
  }
}

export default useArticles