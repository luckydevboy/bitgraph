import ky from "ky";

import { ResponseDto } from "@/api/dto";

export const getOhlcvHourly = () =>
  ky
    .get(
      "https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10",
    )
    .json<ResponseDto>();
