import React, { useContext } from "react";
import dotenv from "dotenv";
import Spinner from "./Components/Spinner";
import Map from "./Components/Map";
import Search from "./Components/Search";
import "./App.scss";
import { StoreContext } from "./store";

dotenv.config();

export default function App() {
  const { storeLoading } = useContext(StoreContext);
  const [loading] = storeLoading;

  return (
    <div className="app">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid">
          <Search />
          <Map />
        </div>
      )}
    </div>
  );
}
