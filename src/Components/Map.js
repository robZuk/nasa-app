import React, { useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "../constans/constans";
import Event from "./Event";
import Cluster from "./Cluster";
import LocationInfoBox from "../Components/LocationInfoBox";
import Header from "../Components/Header";
import "../App.scss";
import { StoreContext } from "../store";

export default function Map() {
  const {
    searchedEventPosition,
    eventsData,
    mapRef,
    locationInfo,
    setLocationInfo,
  } = useContext(StoreContext);

  const [wildfires, volcanoes, ices, storms] = eventsData;

  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const [eventsType, setEventsType] = useState({
    wildfires: true,
    volcanoes: true,
    ices: true,
    storms: true,
  });

  function points(events) {
    return (
      events !== undefined &&
      events.map((ev) => ({
        type: "Feature",
        properties: {
          cluster: false,
          evId: ev.id,
          category: ev.categories[0].title,
          title: ev.title,
          date: ev.geometries[ev.geometries.length - 1].date,
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(ev.geometries[ev.geometries.length - 1].coordinates[0]),
            parseFloat(ev.geometries[ev.geometries.length - 1].coordinates[1]),
          ],
        },
      }))
    );
  }

  const wildfiresPoints = points(wildfires);
  const volcanoesPoints = points(volcanoes);
  const icesPoints = points(ices);
  const stormsPoints = points(storms);

  function useClusterHook(points) {
    const { clusters, supercluster } = useSupercluster({
      points: points,
      bounds,
      zoom,
      options: { radius: 75, maxZoom: 20 },
    });
    return { clusters, supercluster };
  }

  const wildfiresClusters = useClusterHook(wildfiresPoints);
  const volcanoesClusters = useClusterHook(volcanoesPoints);
  const icesClusters = useClusterHook(icesPoints);
  const stormsClusters = useClusterHook(stormsPoints);

  const closeLocationInfo = () => {
    setLocationInfo(null);
  };

  const markers = (clusters, superclusters, type) => {
    return clusters.map((cluster) => {
      const [longitude, latitude] = cluster.geometry.coordinates;
      const { cluster: isCluster, point_count: pointCount } =
        cluster.properties;

      const eventClassName =
        searchedEventPosition[0] === cluster.geometry.coordinates[0] &&
        searchedEventPosition[1] === cluster.geometry.coordinates[1]
          ? "-searched"
          : "";

      if (isCluster) {
        return (
          <Cluster
            key={cluster.id}
            cluster={cluster}
            superclusters={superclusters}
            lng={longitude}
            lat={latitude}
            pointCount={pointCount}
            type={type}
            mapRef={mapRef}
            closeLocationInfo={closeLocationInfo}
          />
        );
      }

      return (
        <Event
          key={cluster.properties.evId}
          cluster={cluster}
          lat={latitude}
          lng={longitude}
          setLocationInfo={setLocationInfo}
          searchedEventPosition={searchedEventPosition}
          className={eventClassName}
        />
      );
    });
  };

  return (
    <div className="map">
      <>
        <Header setEventsType={setEventsType} />
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
          defaultZoom={4}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {eventsType.wildfires &&
            markers(
              wildfiresClusters.clusters,
              wildfiresClusters.supercluster,
              WILDFIRES
            )}
          {eventsType.volcanoes &&
            markers(
              volcanoesClusters.clusters,
              volcanoesClusters.supercluster,
              VOLCANOES
            )}
          {eventsType.ices &&
            markers(icesClusters.clusters, icesClusters.supercluster, ICES)}
          {eventsType.storms &&
            markers(
              stormsClusters.clusters,
              stormsClusters.supercluster,
              STORMS
            )}
        </GoogleMapReact>

        {locationInfo && (
          <LocationInfoBox
            info={locationInfo}
            closeLocationInfo={closeLocationInfo}
          />
        )}
      </>
    </div>
  );
}
