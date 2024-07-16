import { Link } from "react-router-dom"

const Articles = ({ articles }) => {

  if (articles.length === 0) return <p className="mt-9 text-center">No hay artículos</p>

  return (
    <div className="mt-9">
      {articles.map((article, i) => {
        return <Link to={article._id} key={i}>
          <div className="bg-gray-100 text-zinc-800 hover:bg-gray-200 mb-5 p-6">
            <p>{article.description}</p>
          </div>
        </Link>
      })}
    </div>
  )
}

export default Articles
