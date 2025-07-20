"use client";

import { Provider } from "react-redux";
import { Navbar } from "./Components/Navbar";
import appStore from "./store/appStore";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { Header } from "./Components/Header";
import { PreferencesPanel } from "./Components/PreferencesPanel";
import { Dashboard } from "./pages/Dashboard";

export default function Home() {
  return (
    <Provider store={appStore}>
      {/* <RootComp></RootComp> */}
      <PreferencesPanel></PreferencesPanel>
      <Dashboard></Dashboard>
    </Provider>
  );
}
function RootComp() {
  const mode = useSelector((store: RootState) => store.theme.mode);

  return (
    <div
      className={`min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 ${
        mode == "dark" ? "dark" : ""
      } `}
    >
      <Header></Header>
      <Navbar />
    </div>
  );
}
