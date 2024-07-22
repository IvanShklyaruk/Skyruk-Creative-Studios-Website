import { useEffect, useState } from "react";

const DESKTOP_THRESHOLD = 2561;
const LAPTOP_THRESHOLD = 1513;
const TABLET_THRESHOLD = 1025;
const MOBILE_THRESHOLD = 601;

export const useDevice = () => {
  const [scaleFactor, setScaleFactor] = useState(
    window.innerWidth / DESKTOP_THRESHOLD
  );

  const getDevice = (width) => {
    if (width >= DESKTOP_THRESHOLD) return "desktop";
    if (width >= LAPTOP_THRESHOLD && width < DESKTOP_THRESHOLD)
      return "desktop";
    if (width >= TABLET_THRESHOLD && width < LAPTOP_THRESHOLD) return "laptop";
    if (width >= MOBILE_THRESHOLD && width < TABLET_THRESHOLD) return "tablet";
    if (width < MOBILE_THRESHOLD) return "phone";
  };

  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScaleFactor(window.innerWidth / DESKTOP_THRESHOLD);
      setDevice(getDevice(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    scaleFactor,
    device,
  };
};
