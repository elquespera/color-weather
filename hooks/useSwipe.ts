import { useEffect, useState } from "react";

type SwipeDirection = "left" | "right";

type SwipeCallback = (
  direction: SwipeDirection,
  distance: number,
  percentage: number
) => void;

export default function useSwipe(callback: SwipeCallback) {
  const [startCoord, setStartCoord] = useState(0);
  useEffect(() => {
    function handleTouchStart(this: HTMLElement, event: TouchEvent) {
      setStartCoord(event.changedTouches[0].screenX);
    }
    function handleTouchEnd(this: HTMLElement, event: TouchEvent) {
      let distance = event.changedTouches[0].screenX - startCoord;
      const direction = distance > 0 ? "right" : "left";
      distance = Math.abs(distance);
      const percentage = distance / window.innerWidth;

      if (callback) callback(direction, distance, percentage);
    }

    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchend", handleTouchEnd);
    };
  }, [callback]);
}
