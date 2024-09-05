import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
  Link,
} from "@nextui-org/react";
import image from "@/assets/news.png";

export default function LatestNews({ title, description, src, url, date, isMain }) {
  return (
    <Card 
      className={`py-4 max-w-[500px] ${isMain ? "bg-primary text-white" : ""}`}
      style={isMain ? { maxWidth: "100%", padding: "2rem" } : {}}
    >
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${isMain ? "text-center" : ""}`}>
        <Image
          alt="Card background"
          className={`object-cover rounded-xl w-[350px] ${isMain ? "w-full h-auto" : ""}`}
          src={src?src:image}
          width={isMain ? "100%" : 300}
        />
      </CardHeader>
      <CardBody className={`overflow-visible py-2 ${isMain ? "text-lg" : ""}`}>
        <h4 className={`font-bold ${isMain ? "text-3xl" : "text-large"}`}>{title}</h4>
        <small className={`uppercase font-bold ${isMain ? "text-md" : "text-tiny"}`}>{date}</small>
        <small className={`text-default-500 ${isMain ? "block mt-2" : ""}`}>{description}</small>
      </CardBody>
      <CardFooter className={isMain ? "justify-center" : ""}>
        <Link 
          isExternal 
          showAnchorIcon 
          href={url}
          className={isMain ? "text-white font-bold underline" : ""}
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
