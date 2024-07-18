import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useArticles from "../hooks/useArticles"
import Reload from "../components/Reload"

const ArticlePage = () => {
  const { article, loading, error, getOneArticle } = useArticles();
  const { articleId } = useParams();

  useEffect(() => {
    
    getOneArticle(articleId); // Memoized with useCallback

  }, [getOneArticle, articleId])

  if (loading) return <div>Loading...</div>

  if (error) return <Reload message={error} />

  return (
    <div className="text-zinc-800">
      <p>{article.description}</p>
      <div className="flex gap-x-2 mt-3">
        {article.tags.map((tag, i) => {
          return <span className="bg-slate-100 text-slate-800 rounded-sm p-2" key={i}>{tag}</span>
        })}
      </div>
    </div>
  )
}

export default ArticlePage