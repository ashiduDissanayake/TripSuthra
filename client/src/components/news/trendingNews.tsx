import {
  Card,
  CardHeader,
  Divider,
  Link,
  Image
} from "@nextui-org/react";

export default function trendingNews({
  title,
  description,
  src,
  url,
  date,
  author,
}) {
  return (
    <Card className="max-w-[500px]">
      <CardHeader className="flex gap-3">
        <Link href={url}>
          <Image
            alt="nextui logo"
            height={100}
            width={150}
            radius="sm"
            src={src}
          />
        </Link>
        <div className="flex flex-col">
          <Link href={url}>
            <h6 className="text-md hover:underline">{title}</h6>
          </Link>
          <p className="text-small text-default-500">{date}</p>
          <p className="text-small text-default-500">{author}</p>
        </div>
      </CardHeader>
      <Divider />
    </Card>
  );
}
