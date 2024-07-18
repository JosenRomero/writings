import { useEffect } from "react"
import useArticles from "../hooks/useArticles"
import Articles from "../components/Articles"
import ArticleForm from "../components/ArticleForm"
import Reload from "../components/Reload"

const ArticlesPage = () => {
  const { loading, error, articles, getAllArticles, createOneArticle } = useArticles()

  useEffect(() => {

    getAllArticles() // Memoized with useCallback
    
  }, [getAllArticles])

  if (loading) return <div>Loading...</div>

  if (error) return <Reload message={error} />

  const handleArticle = (data) => {
    createOneArticle(data)
  }

  return (
    <div className='text-zinc-800'>

      <h1 className="text-center font-bold text-2xl">Articles</h1>

      <ArticleForm handleArticle={handleArticle} />

      <Articles articles={articles} />
      
    </div>
  )
}

export default ArticlesPage
