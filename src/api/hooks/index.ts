import { useQuery } from "@tanstack/react-query";

import { getHourlyExchangeVol, getOhlcvHourly } from "@/api";
import { mapHourlyExchangeVolFromDto, mapOhlcvHFromDto } from "@/api/mappers";

export const useGetOhlcvHourly = () =>
  useQuery({
    queryKey: ["ohlcv-hourly", 10],
    queryFn: getOhlcvHourly,
    select: mapOhlcvHFromDto,
  });

export const useGetHourlyExchangeVol = () =>
  useQuery({
    queryKey: ["hourly-exchange-volume", 10],
    queryFn: getHourlyExchangeVol,
    select: mapHourlyExchangeVolFromDto,
  });
