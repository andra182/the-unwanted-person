import React from "react";
import SemiCircleProgress from "./ProgressHalfCircle";

const StatusBar = ({ kesenangan, pertemanan }) => {
  return (
    <div className="flex">
      <SemiCircleProgress
        title="Kesenangan"
        value={kesenangan}
        color="#FFC107"
      />
      <SemiCircleProgress
        title="Pertemanan"
        value={pertemanan}
        color="#F44336"
      />
    </div>
  );
};

export default StatusBar;
