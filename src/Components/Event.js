import React from "react";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "../constans/constans";
import {
  WILDFIRE_SRC,
  VOLCANO_SRC,
  ICE_SRC,
  STORM_SRC,
} from "../constans/constans";

const Event = ({ cluster, setLocationInfo, className }) => {
  const d = new Date();
  const EventIcon = ({ src, alt, cluster }) => {
    return (
      <button
        className={`marker${className}`}
        onClick={() =>
          setLocationInfo({
            id: cluster.properties.evId,
            title: cluster.properties.title,
            date: d.toISOString(cluster.properties.date).slice(0, 10),
          })
        }
      >
        <img src={src} alt={alt} />
      </button>
    );
  };
  return (
    <>
      {cluster.properties.category === WILDFIRES && (
        <EventIcon
          src={process.env.PUBLIC_URL + WILDFIRE_SRC}
          alt={WILDFIRES}
          cluster={cluster}
        />
      )}
      {cluster.properties.category === VOLCANOES && (
        <EventIcon
          src={process.env.PUBLIC_URL + VOLCANO_SRC}
          alt={VOLCANOES}
          cluster={cluster}
        />
      )}
      {cluster.properties.category === STORMS && (
        <EventIcon
          src={process.env.PUBLIC_URL + STORM_SRC}
          alt={STORMS}
          cluster={cluster}
        />
      )}
      {cluster.properties.category === ICES && (
        <EventIcon
          src={process.env.PUBLIC_URL + ICE_SRC}
          alt={ICES}
          cluster={cluster}
        />
      )}
    </>
  );
};

export default Event;
