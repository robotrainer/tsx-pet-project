import { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

export const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Изменить тему</button>

      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/*"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
