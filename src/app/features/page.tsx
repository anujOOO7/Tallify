"use client";
import { useEffect } from "react";

export default function FeaturesRedirect() {
  useEffect(() => {
    sessionStorage.setItem("scrollTo", "features");
    window.location.replace("/");
  }, []);
  return null;
}
