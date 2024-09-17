import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
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
