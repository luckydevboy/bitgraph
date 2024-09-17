import { ResponseDto } from "@/api/dto";
import { IOhlvcH } from "@/interfaces";

export const mapOhlcvHFromDto = (dto: ResponseDto): IOhlvcH[] => {
  return dto.Data.Data.map((item) => ({
    time: item.time,
    low: item.low,
    high: item.high,
    average: (item.low + item.high) / 2,
  }));
};
