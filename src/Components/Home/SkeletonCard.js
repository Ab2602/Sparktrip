import React from "react";
import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-details">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;