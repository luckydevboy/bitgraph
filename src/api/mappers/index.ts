import { ResponseDto } from "@/api/dto";
import { IOhlvcH } from "@/interfaces";

export const mapOhlcvHFromDto = (dto: ResponseDto): IOhlvcH[] => {
  return dto.Data.Data.map((item) => {
    const timestamp = item.time * 1000;
    const date = new Date(timestamp);

    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    return {
      time,
      low: item.low,
      high: item.high,
      average: (item.low + item.high) / 2,
    };
  });
};
