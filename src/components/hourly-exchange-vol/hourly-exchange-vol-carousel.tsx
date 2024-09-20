import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  HourlyExchangeVol,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from "@/components";
import { useGetHourlyExchangeVol } from "@/api";

type Props = {
  className?: string;
};

const HourlyExchangeVolCarousel = ({ className }: Props) => {
  const { data, isLoading, isError, error } = useGetHourlyExchangeVol();

  return (
    <Card className={className}>
      <CardHeader></CardHeader>
      <CardContent className="h-[calc(100%-24px-48px)]">
        {/* TODO: Use Skeleton component */}
        {isLoading && <>Loading...</>}

        {data && (
          <Carousel className="h-full">
            <CarouselContent className="h-full">
              {data.map((vol) => (
                <CarouselItem className="h-full">
                  <HourlyExchangeVol data={vol} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPagination />
          </Carousel>
        )}

        {isError && <code>{error?.message}</code>}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default HourlyExchangeVolCarousel;
