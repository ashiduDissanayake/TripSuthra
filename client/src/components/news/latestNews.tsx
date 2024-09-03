import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
  Link,
} from "@nextui-org/react";

export default function latestNews({title,description,src,url,date}) {
  return (
    <Card className="py-4 max-w-[345px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={src}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-tiny uppercase font-bold">{date}</small>
        <small className="text-default-500">{description}</small>
      </CardBody>
      <CardFooter>
        <Link isExternal showAnchorIcon href={url}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
