import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

interface TimeProps {
  date: string;
}

const calculate = (date: string) => {
  const currentDate = dayjs().tz();
  const formatDate = dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSSSSSZ");
  const localDate = dayjs(formatDate).tz();

  const diferenciaHoras = currentDate.diff(localDate, "hour", true);

  if (diferenciaHoras < 24) {
    if (diferenciaHoras < 1) {
      const diferenciaMinutos = currentDate.diff(localDate, "minute");
      return ` ${Math.floor(diferenciaMinutos)} m`;
    } else {
      return ` ${Math.floor(diferenciaHoras)} h`;
    }
  } else {
    const diferenciaDias = currentDate.diff(localDate, "day");
    return ` ${diferenciaDias} d`;
  }
};

const Time: React.FC<TimeProps> = ({ date }) => {
  const timeLapse = calculate(date);

  return <div className="font-inter text-sm text-gray-500">{timeLapse}</div>;
};

export default Time;
