"use client";

import { useState } from "react";
import Link from "next/link";

type TabType = "plan" | "saved";

const NavbarEndTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("plan");

  const getLinkClass = (tab: TabType) =>
    `btn btn-sm btn-ghost rounded-full font-medium flex items-center ${
      activeTab === tab ? "text-gray-300" : "text-gray-400 hover:text-gray-300"
    }`;

  const getBadgeClass = (tab: TabType) =>
    `badge badge-sm rounded-full px-1.5 py-0.5 text-xs font-bold border ${
      activeTab === tab
        ? "bg-lime-400 text-black border-lime-400"
        : "bg-transparent text-gray-300 border-slate-800"
    }`;

  return (
    <div className="flex items-center">
      <Link
        href="/my-plan"
        className={getLinkClass("plan")}
        onClick={() => setActiveTab("plan")}
      >
        Plan
        <span className={getBadgeClass("plan")}>0</span>
      </Link>

      <Link
        href="/my-plan"
        className={getLinkClass("saved")}
        onClick={() => setActiveTab("saved")}
      >
        Saved
        <span className={getBadgeClass("saved")}>0</span>
      </Link>
    </div>
  );
};

export default NavbarEndTabs;
