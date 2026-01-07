/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import L from "leaflet";

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    (function () {
      setIsClient(true);
    })();

    if (typeof window !== "undefined") {
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });
    }
  }, []);

  if (!isClient) {
    return (
      <div
        className="bg-gray-200 rounded-lg animate-pulse"
        style={{ width: "300px", height: "300px" }}
      />
    );
  }

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "10px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Melan Cafe</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
