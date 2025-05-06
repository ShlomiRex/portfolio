import { Card, CardHeader } from "@/components/ui/card";

type ConferenceCardProps = {
    children?: React.ReactNode;
    name: string;
    date: string;
    location: string;
};

export default function ConferenceCard({ children, name, date, location }: ConferenceCardProps) {
    return (
        <Card className="overflow-hidden rounded-lg shadow-md">
            <CardHeader>
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className="text-sm text-muted-foreground">{date}</span>
                <span className="text-sm text-muted-foreground">{location}</span>
            </CardHeader>

            <hr></hr>

            <div className="p-4">
                {children}
            </div>
        </Card>
    );
}