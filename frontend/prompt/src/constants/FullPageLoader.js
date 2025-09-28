import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const FullPageLoader = ({ isLoading }) => (
  <Backdrop
    sx={{
      color: "#fff",
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
    }}
    open={isLoading}
  >
    <div className="loader pop">
        <div className="ring" aria-hidden="true"></div>

        <svg viewBox="0 0 200 200" role="img" aria-label="App loading">
          <rect className="back" x="24" y="56" width="120" height="120" rx="28" />
          <rect className="front" x="56" y="24" width="120" height="120" rx="28" />
          <g transform="translate(74,53)">
            <rect className="line" x="0" y="0" width="84" height="8" rx="4" />
            <rect className="line" x="14" y="18" width="70" height="8" rx="4" />
            <rect className="line" x="6" y="36" width="78" height="8" rx="4" />
            <rect className="line" x="16" y="54" width="68" height="8" rx="4" />
          </g>
        </svg>
      </div>
  </Backdrop>
);

export default FullPageLoader;