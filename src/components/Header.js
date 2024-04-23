import React from "react";
import { Inbox, Notification, UserIcon } from "../utils/constants";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white text-black p-10 shadow-3xl shadow-slate-700 flex justify-between items-center shadow-bottom">
      <h1 className="text-3xl font-bold"><Link to="/">Dashboard Admin Setting</Link></h1>
      <div className="flex items-center">
        {Notification}
        {UserIcon}
        {Inbox}
      </div>
    </div>
  );
}

export default Header;
