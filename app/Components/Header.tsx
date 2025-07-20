import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeMode } from "../features/theme/themeSlice";

export function Header() {
  const mode = useSelector((store: RootState) => store.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end ... p-4 bg-white dark:bg-gray-900">
      <button
        className="px-4 py-2 rounded bg-gray-800 text-white"
        onClick={() => dispatch(changeMode(mode === "dark" ? "light" : "dark"))}
      >
        {mode === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </div>
  );
}
