import { useState, useEffect } from "react";

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };

      // Set initial height
      setWindowHeight(window.innerHeight);

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowHeight;
};

export default useWindowHeight;
