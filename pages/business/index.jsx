import React from "react";
import HeroBusiness from "./partials/HeroBusiness";
import ItSectior from "./partials/ItSectior";
import CallCenter from "./partials/CallCenter";
import ExportImport from "./partials/ExportImport";

const Business = () => {
  return (
    <div className="overflow-hidden">
      <HeroBusiness />
      <ItSectior />
      <CallCenter />
      <ExportImport />
    </div>
  );
};

export default Business;
