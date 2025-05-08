import { Card, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

type VolunteeringCardProps = {
    children?: React.ReactNode;
    name: string;
    date: string;
    location: string;
};

export default function Volunteering({ children, name, date, location }: VolunteeringCardProps) {
    return (
        <Card className="overflow-hidden rounded-lg shadow-md">
            <CardHeader>
                <h2 className="text-xl font-semibold">{name}</h2>
                <div className="flex flex-row gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">{date}</span>
                </div>
                <div className="flex flex-row gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm text-muted-foreground">{location}</span>
                </div>
            </CardHeader>

            <hr></hr>

            <div className="p-4">
                {children}
            </div>
        </Card>
    );
}