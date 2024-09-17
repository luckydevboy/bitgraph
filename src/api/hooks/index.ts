import { useQuery } from "@tanstack/react-query";

import { getOhlcvHourly } from "@/api";
import { mapOhlcvHFromDto } from "@/api/mappers";

export const useGetOhlcvHourly = () =>
  useQuery({
    queryKey: ["ohlcv", "hourly", 10],
    queryFn: getOhlcvHourly,
    select: (res) => mapOhlcvHFromDto(res),
  });
