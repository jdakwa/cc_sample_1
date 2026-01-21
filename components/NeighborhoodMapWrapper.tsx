'use client';

import dynamic from 'next/dynamic';

const NeighborhoodMap = dynamic(() => import('@/components/NeighborhoodMap'), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-green-50 rounded-lg flex items-center justify-center border-2 border-green-200 border-dashed">
      <div className="text-center text-green-600">
        <span className="text-3xl mb-1 block">🗺️</span>
        <p className="font-semibold text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

interface NeighborhoodMapWrapperProps {
  center: [number, number];
  zoom?: number;
  areas?: string[];
  neighborhoodName: string;
}

export default function NeighborhoodMapWrapper(props: NeighborhoodMapWrapperProps) {
  return <NeighborhoodMap {...props} />;
}
