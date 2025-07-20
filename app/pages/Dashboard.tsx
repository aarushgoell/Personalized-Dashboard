import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../features/news/newsSlice";

export function Dashboard() {
  const categories = useSelector(
    (state: RootState) => state.preferences.categories
  );

  const dispatch = useDispatch();

  const articles = useSelector((state: RootState) => state.news.article);
  const status = useSelector((state: RootState) => state.news.status);

  useEffect(() => {
    if (categories.length > 0) {
      dispatch(fetchNews(categories) as any);
    }
  }, [categories, dispatch]);

  return (
    <div>

       <a href="">Dashboard</a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {status === "loading" && <div>Loading...</div>}
        {articles.map((article) => (
          <ContentCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
}
