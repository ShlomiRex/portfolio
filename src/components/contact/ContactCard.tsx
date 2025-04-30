import { Card, CardContent } from "../ui/card";

export default function ContactCard({ info }) {
    return (
      <Card className="transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6 flex items-center space-x-3">
          <span className="text-primary">{info.icon}</span>
          <div>
            <p className="text-sm text-muted-foreground">{info.label}</p>
            <p className="font-medium">{info.value}</p>
          </div>
        </CardContent>
      </Card>
    )
  }