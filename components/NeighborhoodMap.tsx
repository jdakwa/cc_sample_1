'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface NeighborhoodMapProps {
  center: [number, number]; // [lat, lng]
  zoom?: number;
  areas?: string[];
  neighborhoodName: string;
}

export default function NeighborhoodMap({ center, zoom = 13, areas, neighborhoodName }: NeighborhoodMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(containerRef.current).setView(center, zoom);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add marker for neighborhood center
    L.marker(center)
      .addTo(map)
      .bindPopup(`<strong>${neighborhoodName}</strong>`)
      .openPopup();

    // Cleanup
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center, zoom, neighborhoodName]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-80 rounded-lg"
      style={{ zIndex: 0 }}
    />
  );
}
