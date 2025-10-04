import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskCardProps {
  riskLevel: "low" | "medium" | "high";
  score?: number;
  factors?: string[];
  className?: string;
}

const riskConfig = {
  low: {
    icon: CheckCircle,
    label: "Low Risk",
    color: "success",
    bgColor: "success-light",
    description: "Results suggest normal cognitive function"
  },
  medium: {
    icon: Clock,
    label: "Medium Risk", 
    color: "warning",
    bgColor: "warning-light",
    description: "Some areas may need follow-up with healthcare provider"
  },
  high: {
    icon: AlertTriangle,
    label: "High Risk",
    color: "destructive", 
    bgColor: "destructive-light",
    description: "Recommend consultation with healthcare professional"
  }
};

export function RiskCard({ riskLevel, score, factors = [], className }: RiskCardProps) {
  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <Card className={cn("p-6 animate-fade-in", className)}>
      <div className={`p-4 rounded-lg bg-${config.bgColor} mb-4`}>
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`h-6 w-6 text-${config.color}`} />
          <Badge variant="secondary" className={`bg-${config.color} text-${config.color}-foreground`}>
            {config.label}
          </Badge>
          {score && (
            <span className="text-sm text-muted-foreground ml-auto">
              Score: {score}/100
            </span>
          )}
        </div>
        <p className="text-sm text-foreground">{config.description}</p>
      </div>

      {factors.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">Contributing Factors:</h4>
          <ul className="space-y-1">
            {factors.map((factor, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                {factor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}