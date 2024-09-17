"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useGetOhlcvHourly } from "@/api/hooks";

export default function Home() {
  const { data, isLoading, isError, error } = useGetOhlcvHourly();

  // if (isLoading) {
  //   return <Loader />;
  // }
  //
  // if (isError) {
  //   return <Error error={error} />;
  // }

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <Card className="col-span-9">
        <CardHeader></CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ipsum.
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card className="col-span-3">
        <CardHeader></CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ipsum.
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Card className="col-span-12">
        <CardHeader></CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ipsum.
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
