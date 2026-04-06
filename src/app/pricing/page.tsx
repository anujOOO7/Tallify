"use client";
import { useEffect } from "react";

export default function PricingRedirect() {
  useEffect(() => {
    sessionStorage.setItem("scrollTo", "pricing");
    window.location.replace("/");
  }, []);
  return null;
}
