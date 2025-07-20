import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { changeMode } from "../features/theme/themeSlice";

export function Header() {
  const mode = useSelector((store: RootState) => store.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center gap-4 p-4 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-semibold">Current Mode: {mode}</h1>
      <button
        className="px-4 py-2 rounded bg-gray-800 text-white"
        onClick={() => dispatch(changeMode(mode === "dark" ? "light" : "dark"))}
      >
        {mode === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
