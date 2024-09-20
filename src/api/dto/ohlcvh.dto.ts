export interface OhlcvHDto {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: RateLimit;
  Data: Data;
}

interface Data {
  Aggregated: boolean;
  TimeFrom: number;
  TimeTo: number;
  Data: Datum[];
}

interface Datum {
  time: number;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: ConversionType;
  conversionSymbol: string;
}

enum ConversionType {
  Direct = "direct",
}

interface RateLimit {}
