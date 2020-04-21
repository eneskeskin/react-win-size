import { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

export default function useWinSize({
  widthOffset = 0,
  heightOffset = 0,
  updateMode = "throttle",
  delay = 500,
} = {}) {
  const [width, setWidth] = useState(window.innerWidth + widthOffset);
  const [height, setHeight] = useState(window.innerHeight + heightOffset);

  const updateFn = updateMode === "debounce" ? debounce : throttle;
  const handleResize = useRef(
    updateFn(() => {
      setWidth(window.innerWidth + widthOffset);
      setHeight(window.innerHeight + heightOffset);
    }, delay)
  );

  useEffect(() => {
    const handleResizeFn = handleResize.current;
    window.addEventListener("resize", handleResizeFn);
    return () => window.removeEventListener("resize", handleResizeFn);
  }, []);

  return [width, height];
}
