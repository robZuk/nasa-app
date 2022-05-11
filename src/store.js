import React, { useState, useRef, useEffect } from "react";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "./constans/constans";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const mapRef = useRef();
  const [eventsData, setEventsData] = useState([]);
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searchedEventPosition, setSearchedEventPosition] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
        const { events } = await res.json();
        console.log(events);
        setData(events);

        const wildfires = events.filter(
          (ev) => ev.categories[0].title === WILDFIRES
        );

        const volcanoes = events.filter(
          (ev) => ev.categories[0].title === VOLCANOES
        );
        const ices = events.filter((ev) => ev.categories[0].title === ICES);
        const storms = events.filter((ev) => ev.categories[0].title === STORMS);

        setEventsData([[...wildfires], [...volcanoes], [...ices], [...storms]]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const store = {
    mapRef,
    eventsData,
    setEventsData,
    data,
    setData,
    searchedData,
    setSearchedData,
    searchedEventPosition,
    setSearchedEventPosition,
    locationInfo,
    setLocationInfo,
    storeLoading: [loading, setLoading],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
