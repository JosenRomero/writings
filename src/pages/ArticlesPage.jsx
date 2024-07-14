import useArticles from "../hooks/useArticles"
import Articles from "../components/Articles"

const ArticlesPage = () => {
  const { loading, error, articles } = useArticles()

  if (loading) return <div>Loading...</div>

  return (
    <div className='text-zinc-800'>

      {error && (
        <div
          className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
          role='alert'
        >
          Something went wrong
        </div>
      )}

      <h1 className="text-center font-bold text-2xl">Articles</h1>

      <Articles articles={articles} />
      
    </div>
  )
}

export default ArticlesPage
