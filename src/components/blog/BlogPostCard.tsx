import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BlogPost } from "@/data/blog";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video group">
                {!imageLoaded && (
                    <Skeleton className="absolute inset-0" />
                )}
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                />
                {/* Overlay image if present */}
                {post.overlayImage && (
                    <img
                        src={post.overlayImage}
                        alt="Overlay"
                        className="absolute top-2 left-2 object-contain bg-white rounded shadow-md p-0.5"
                        style={{ maxWidth: '8rem', maxHeight: '8rem', width: 'auto', height: 'auto', pointerEvents: 'none' }}
                    />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-white" />
                </div>
                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 no-underline hover:no-underline"
                />
            </div>
            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="bg-secondary px-2 py-1 rounded-full">
                        {post.topic}
                    </span>
                    <span>•</span>
                    <span>{post.publishDate}</span>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-base">
                    {post.description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}

export default BlogPostCard;
