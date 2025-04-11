import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Youtube from "@/components/icons/social/youtube";
import { ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
];

const PostsCard = () => {
  return (
    <Card className="flex flex-col h-fit">
      <CardHeader>
        <CardTitle>Senaste inlägg</CardTitle>
        <CardDescription>Se senaste inläggen för ditt konto</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} />
        ))}
      </CardContent>
    </Card>
  );
};

const Post = ({ title }: { title: string }) => {
  return (
    <Button variant="outline" className="h-auto flex justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 border rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsaMz8G8MFP6nOYOru1cEPDTTPbxWcfDIiw&s"
            alt="Post"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex items-start flex-col">
          <p>{title}</p>
          <div className="flex items-center">
            <Youtube />
            <p className="text-sm ml-1 text-muted-foreground">Youtube</p>
          </div>
        </div>
      </div>
      <ChevronRight />
    </Button>
  );
};

export default PostsCard;
