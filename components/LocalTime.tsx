import { useEffect, useState } from "react";
import useConvertDate from "hooks/useConvertDate";
import useTranslation from "hooks/useTranslation";
import { lng } from "@/assets/translations";

const REFRESH_INTERVAL = 1000;

interface LocalTimeProps {
  timezone?: number;
}

export default function LocalTime({ timezone }: LocalTimeProps) {
  const t = useTranslation();
  const [, convertDate, convertTime] = useConvertDate();
  const [time, setTime] = useState<number>(Date.now() + (timezone || 0));
  const [showDate, setShowDate] = useState(false);

  function calculateTime() {
    const today = new Date();
    const local = Date.now() + (timezone || 0);
    setShowDate(today.getUTCDate() !== new Date(local).getUTCDate());
    setTime(local);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTime();
    }, REFRESH_INTERVAL);

    calculateTime();
    return () => clearInterval(timer);
  }, [timezone]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-1 text-primary-sub-header">
        <span className="font-semibold sm:text-2xl">{convertTime(time)}</span>
        {showDate && (
          <span className="text-sm">{convertDate(time, false, true)}</span>
        )}
      </div>
      <span className="text-text-secondary text-sm sm:text-base">
        {t(lng.localTime)}
      </span>
    </div>
  );
}
