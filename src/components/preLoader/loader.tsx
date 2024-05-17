import React from "react";

const Loader = () => {
  return (
   <div className="fixed flex flex-col w-full h-screen z-[10000] bg-white/90 !top-0 items-center justify-center hscreen">
     <div className="pl">
      <svg className="pl__rings" viewBox="0 0 128 128" width="128px" height="128px">
        <g fill="none" strokeLinecap="round" strokeWidth="4">
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.3)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.3)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0)"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsla(223,90%,50%,0.5)"
              strokeDasharray="50 240"
            />
            <ellipse
              className="pl__orbit"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(223,90%,50%)"
              strokeDasharray="25 265"
            />
          </g>
          <g className="pl__ring" transform="rotate(0)">
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
          </g>
          <g className="pl__ring" transform="rotate(180)">
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
            <ellipse
              className="pl__electron"
              cx="64"
              cy="64"
              rx="60"
              ry="30"
              stroke="hsl(0,0%,100%)"
              strokeDasharray="1 289"
              strokeWidth="8"
            />
          </g>
        </g>
      </svg>
      <div className="pl__nucleus">
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
        <div className="pl__nucleus-particle"></div>
      </div>
    </div>
   </div>
  );
};

export default Loader;
