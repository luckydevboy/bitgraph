export interface HourlyExchangeVolDto {
  Type: number;
  Message: string;
  Data: Datum[];
  TimeFrom: number;
  TimeTo: number;
  FirstValueInArray: boolean;
  ConversionType: string;
  RateLimit: RateLimit;
  HasWarning: boolean;
}

interface Datum {
  time: number;
  volume: number;
}

interface RateLimit {}
