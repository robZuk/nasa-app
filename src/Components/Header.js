import React, { useState } from "react";
import {
  WILDFIRE_SRC,
  VOLCANO_SRC,
  ICE_SRC,
  STORM_SRC,
} from "../constans/constans";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "../constans/constans";

const showEvents = (setEventsType, event) => {
  setEventsType((prevState) => ({
    ...prevState,
    [event]: !prevState[event],
  }));
};

const Icon = ({ src, alt, setEventsType, event }) => {
  const [activeIcon, setActiveIcon] = useState(true);
  return (
    <button
      className={`marker map-header-icon${!activeIcon && "-active"}`}
      onClick={() => {
        showEvents(setEventsType, event);
        setActiveIcon((prevActiveIcon) => !prevActiveIcon);
      }}
    >
      <img src={src} alt={alt} className="map-header-img" />
    </button>
  );
};
const Header = ({ setEventsType }) => {
  return (
    <div className="map-header">
      <Icon
        src={process.env.PUBLIC_URL + WILDFIRE_SRC}
        alt={WILDFIRES}
        setEventsType={setEventsType}
        event="wildfires"
      />
      <Icon
        src={process.env.PUBLIC_URL + VOLCANO_SRC}
        alt={VOLCANOES}
        setEventsType={setEventsType}
        event="volcanoes"
      />
      <Icon
        src={process.env.PUBLIC_URL + ICE_SRC}
        alt={ICES}
        setEventsType={setEventsType}
        event="ices"
      />
      <Icon
        src={process.env.PUBLIC_URL + STORM_SRC}
        alt={STORMS}
        setEventsType={setEventsType}
        event="storms"
      />
    </div>
  );
};

export default Header;
