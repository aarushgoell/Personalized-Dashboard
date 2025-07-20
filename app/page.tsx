"use client";

import { Provider } from "react-redux";
import { Navbar } from "./Components/Navbar";
import appStore from "./store/appStore";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { Header } from "./Components/Header";

export default function Home() {
  return (
    <Provider store={appStore}>
      <RootComp></RootComp>
    </Provider>
  );
}
function RootComp() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  // 🧠 This hook runs on client after hydration
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header></Header>
      <Navbar />
    </div>
  );
}
