import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ResearchCardProps {
  title: string;
  date: string;
  description: string;
  children?: ReactNode;
  youtubeUrl?: string;
  references?: string[];
}

const ResearchCard = ({
  title,
  date,
  description,
  children,
  youtubeUrl,
  references
}: ResearchCardProps) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex flex-col">
            <h3 className="font-semibold tracking-tight text-2xl">{title}</h3>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {children && <div className="pt-2">{children}</div>}

        {youtubeUrl && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={youtubeUrl}
              title={title}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {references && references.length > 0 && (
          <div className="space-y-2 bg-muted rounded-lg p-4">
            <h4 className="font-medium">References</h4>
            <ul className="list-disc list-inside space-y-1">
              {references.map((reference, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {reference}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
