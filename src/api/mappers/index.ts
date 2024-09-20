import { OhlcvHDto } from "@/api/dto/ohlcvh.dto";
import { IHourlyExchangeVol, IOhlcvH } from "@/interfaces";
import { HourlyExchangeVolDto } from "@/api/dto";

export const mapOhlcvHFromDto = (dto: OhlcvHDto): IOhlcvH[] => {
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

export const mapHourlyExchangeVolFromDto = (
  dto: HourlyExchangeVolDto,
): IHourlyExchangeVol[] =>
  dto.Data.map((item) => {
    const timestamp = item.time * 1000;
    const date = new Date(timestamp);

    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const time = `${hours}:${minutes}`;

    return {
      time,
      volume: item.volume,
    };
  });
