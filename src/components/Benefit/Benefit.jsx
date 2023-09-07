import React from 'react';
// import ben1 from '../../assets/laptop composition video.jpg';
// import ben2 from '../../assets/undraw_Teacher_re_sico 1.png';
// import ben3 from '../../assets/undraw_Teacher_re_sico 3.png';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@material-tailwind/react';

export default function CardDefault() {
  return (
    <div className="flex gap-x-5">
      <Card className="mt-6 w-[200px] h-[300px]">
        <CardHeader color="blue-gray" className="relative mt-5">
          <img src={''} alt="card-image" className="w-full h-full" />
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-sky"> Wawasan Luas</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-[200px] h-[300px]">
        <CardHeader color="blue-gray" className="relative mt-5">
          <img src={''} alt="card-image" className="w-full h-full" />
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-sky"> Ditangani dosen berpengalaman</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-[200px] h-[300px]">
        <CardHeader color="blue-gray" className="relative mt-5">
          <img src={''} alt="card-image" className="w-full h-full" />
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-sky"> Pembayaran Mudah </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
