import React from "react";
import SettingsTitle from "./SettingsTitle";
import SettingsSideNav from "./SettingsSideNav";

function SettingsLayout({ children }) {
  return (
    <div>
      <SettingsTitle />
      <div className="flex">
        <SettingsSideNav />
        <div className="p-4">
        {children}
        </div>
      </div>
    </div>
  );
}

export default SettingsLayout;
