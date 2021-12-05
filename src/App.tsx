import React from "react";
import L from "leaflet";
import cn from "classnames";
// import { Button } from "@abr-ya/lib-travel-kit-demo";
import { useWindowWidth } from "@react-hook/window-size";
import useDarkMode from "./hooks/useDarkMode";
import { Filters, Header, Map } from "./components/";
import rentals from "./data/rentals";

const App = () => {
  const { darkMode } = useDarkMode({ forceDark: false });

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 1024;
  // const isLargerDesktop = true;
  console.log("isMobile", isMobile, `(${windowWidth})`);
  console.log("darkMode", darkMode);
  console.log("rentals", rentals);

  const markerCoordinates: L.LatLngExpression[] = rentals.map(
    (rental) => rental.coordinates
  );
  const bounds: L.LatLngBounds = L.latLngBounds(markerCoordinates);

  return (
    <div
      className={cn("flex h-screen", {
        "dark bg-gray-900": darkMode,
        "flex-col": isMobile,
        "flex-row": !isMobile,
      })}
    >
      <div
        className={cn(
          "w-full overflow-y-auto grid grid-cols-1 2xl:grid-cols-5"
          // {
          //   "fixed top-20": isMobile && open,
          // }
        )}
      >
        <div className="mx-8 mt-10 2xl:col-span-3">
          <Header />
          <hr className="mt-3 mb-3 border-t border-gray-300 2xl:my-6 md:mt-5 dark:border-opacity-20" />
          <Filters />
          <Map rentals={rentals} bounds={bounds} />
        </div>
      </div>
    </div>
  );
};

export default App;
