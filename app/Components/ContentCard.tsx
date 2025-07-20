function ContentCard({ article }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4 m-2">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="font-bold my-2">{article.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-600 dark:text-blue-400 underline"
      >
        Read More
      </a>
    </div>
  );
}
