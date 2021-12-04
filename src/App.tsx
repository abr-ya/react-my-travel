import React from "react";
import L from "leaflet";
import { Button, rentals } from "@abr-ya/lib-travel-kit-demo";
// import classNames from "classnames";
import { useWindowWidth } from "@react-hook/window-size";
import useDarkMode from "./hooks/useDarkMode";
import { Filters, Map } from "./components/";

const App = () => {
  const btnClickHandler = () => console.log("клик!");
  const { darkMode } = useDarkMode({ forceDark: false });
  const windowWidth = useWindowWidth();
  console.log("windowWidth", windowWidth);
  console.log("darkMode", darkMode);
  console.log("rentals", rentals);

  const markerCoordinates: L.LatLngExpression[] = rentals.map(
    (rental) => rental.coordinates
  );
  const bounds: L.LatLngBounds = L.latLngBounds(markerCoordinates);

  return (
    <div>
      Hello MyTravelApp
      <Button variant="primary" onClick={btnClickHandler}>
        Я кнопко!
      </Button>
      <Filters />
      <Map rentals={rentals} bounds={bounds} />
    </div>
  );
};

export default App;
