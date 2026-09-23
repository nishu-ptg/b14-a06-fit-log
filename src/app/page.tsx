"use client";

import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const showToast = () => {
    toast.success("Toast works!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <button className="btn btn-primary" onClick={showToast}>
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
}
