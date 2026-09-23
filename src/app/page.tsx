"use client";

import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const showToast = () => {
    toast.success("Toast works!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <button className="btn btn-primary m-5" onClick={showToast}>
        Show Toast
      </button>

      <p className="font-oswald text-3xl m-5">Oswald font test</p>

      <p className="font-inter text-3xl m-5">Inter font test</p>

      <ToastContainer />
    </div>
  );
}
