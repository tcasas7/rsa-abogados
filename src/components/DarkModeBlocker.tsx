"use client";
import { useEffect } from "react";

const DarkModeBlocker = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return null;
};

export default DarkModeBlocker;
