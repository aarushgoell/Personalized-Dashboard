import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { setCategories } from "../features/preferences/preferencesSlice";
import { useEffect } from "react";

const categoriesList = ["technology", "sports", "finance", "entertainment"];

export function PreferencesPanel() {
  const selected = useSelector(
    (store: RootState) => store.preferences.categories
  );

  const dispatch = useDispatch();

  function handleToggle(cat: string) {
    const updated = selected.includes(cat)
      ? selected.filter((c) => c !== cat)
      : [...selected, cat];
    dispatch(setCategories(updated));
  }
  useEffect(() => {
    const saved = localStorage.getItem("categories");
    if (saved) {
      dispatch(setCategories(JSON.parse(saved)));
    }
  }, [dispatch]);
  
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(selected));
  }, [selected]);


  return (
    <form>
      {categoriesList.map((cat) => (
        <label key={cat} className="block my-2">
          <input
            type="checkbox"
            value={cat}
            checked={selected.includes(cat)}
            onChange={() => handleToggle(cat)}
          />

          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </label>
      ))}
    </form>
  );
}



// https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=fa6c71e4eb184470b100537dcbf8d910