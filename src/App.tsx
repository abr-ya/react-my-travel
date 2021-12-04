import React from "react";
import { Button } from "@abr-ya/lib-travel-kit-demo";
// import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";
// import useDarkMode from "./hooks/useDarkMode";
import { Filters } from "./components/";

const App = () => {
  const btnClickHandler = () => console.log("клик!");
  // const { darkMode } = useDarkMode({ forceDark: false });
  const windowWidth = useWindowWidth();
  console.log("windowWidth", windowWidth);

  return (
    <div>
      Hello MyTravelApp
      <Button variant="primary" onClick={btnClickHandler}>
        Я кнопко!
      </Button>
      <Filters />
    </div>
  );
};

export default App;
