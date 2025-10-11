"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Set default icon images for leaflet
// This is necessary because Leaflet's default assets are imported as modules
const defaultIcon = L.icon({
  iconUrl: "/images/placeholder.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // We need this to handle SSR (Server Side Rendering)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Jakarta coordinates
  const position: [number, number] = [-6.2088, 106.8456];

  // No map rendering on server
  if (!isMounted) {
    return (
      <div className="h-full bg-gray-200 flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <>
      {/* For screen readers */}
      <div className="sr-only">
        Our office is located in Jakarta, Indonesia.
      </div>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Nusaterra Global Resources
            <br />
            Jakarta, Indonesia
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
