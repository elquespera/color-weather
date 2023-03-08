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
      if (!callback || isScrollable(event.target as HTMLElement)) return;

      let distance = event.changedTouches[0].screenX - startCoord;
      const direction = distance > 0 ? "right" : "left";
      distance = Math.abs(distance);
      const percentage = distance / window.innerWidth;

      if (callback && distance !== 0) callback(direction, distance, percentage);
    }

    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchend", handleTouchEnd);
    };
  }, [callback]);
}

function isScrollable(element: HTMLElement | null): boolean {
  if (!element) return false;
  const scrollable =
    element.scrollWidth > element.clientWidth &&
    ["scroll", "auto"].includes(getComputedStyle(element).overflowY);
  return scrollable || isScrollable(element.parentElement);
}
