import ky from "ky";

import { HourlyExchangeVolDto, OhlcvHDto } from "@/api/dto";

export const getOhlcvHourly = () =>
  ky
    .get(
      "https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=9",
    )
    .json<OhlcvHDto>();

export const getHourlyExchangeVol = () =>
  ky
    .get(
      "https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BTC&limit=9",
    )
    .json<HourlyExchangeVolDto>();
