import React from "react";
import { WILDFIRES, VOLCANOES, ICES, STORMS } from "../constans/constans";

const Cluster = ({
  cluster,
  superclusters,
  lat,
  lng,
  pointCount,
  type,
  mapRef,
  closeLocationInfo,
}) => {
  const ClusterIcon = ({ className }) => {
    return (
      <div
        className={className}
        onClick={() => {
          const expansionZoom = Math.min(
            superclusters.getClusterExpansionZoom(cluster.id),
            20
          );
          mapRef.current.setZoom(expansionZoom);
          mapRef.current.panTo({ lat, lng });
          closeLocationInfo();
        }}
      >
        {pointCount}
      </div>
    );
  };

  return (
    <>
      {type === WILDFIRES && (
        <ClusterIcon className={"cluster-marker cluster-marker-wildfires"} />
      )}
      {type === VOLCANOES && (
        <ClusterIcon className={"cluster-marker cluster-marker-volcanoes"} />
      )}
      {type === ICES && (
        <ClusterIcon className={"cluster-marker cluster-marker-ices"} />
      )}
      {type === STORMS && (
        <ClusterIcon className={"cluster-marker cluster-marker-storms"} />
      )}
    </>
  );
};

export default Cluster;
