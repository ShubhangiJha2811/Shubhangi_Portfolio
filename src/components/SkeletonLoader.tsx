import React from 'react';

export const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const SkeletonText = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const SkeletonImage = () => (
  <div className="bg-gray-200 rounded-lg w-full h-48 animate-pulse"></div>
);

export const SkeletonButton = () => (
  <div className="h-12 bg-gray-200 rounded-lg w-32 animate-pulse"></div>
);
