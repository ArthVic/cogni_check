import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RiskCard } from "@/components/RiskCard";
import { FileText, Download, Share, Home, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data - in real app this would come from assessment results
const mockResults = {
  riskLevel: "medium" as const,
  overallScore: 72,
  completedDate: "October 4, 2025",
  factors: [
    "Slight delays in word recall tasks",
    "Some hesitation in speech patterns",
    "Normal attention and orientation"
  ],
  domainScores: {
    memory: 68,
    attention: 85,
    language: 70,
    orientation: 95
  }
};

export default function Results() {
  const navigate = useNavigate();

  const downloadReport = () => {
    console.log("Downloading PDF report...");
  };

  const shareResults = () => {
    console.log("Sharing results...");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Assessment Results</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Completed on {mockResults.completedDate}
            </p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={downloadReport}>
              <Download className="h-4 w-4" />
              Download Report
            </Button>
            <Button variant="outline" size="sm" onClick={shareResults}>
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Risk Assessment */}
          <div className="lg:col-span-2 space-y-6">
            <RiskCard 
              riskLevel={mockResults.riskLevel}
              score={mockResults.overallScore}
              factors={mockResults.factors}
            />

            {/* Domain Breakdown */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Detailed Breakdown</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(mockResults.domainScores).map(([domain, score]) => {
                  const getScoreColor = (score: number) => {
                    if (score >= 80) return "success";
                    if (score >= 60) return "amber-500";
                    return "destructive";
                  };
                  
                  const color = getScoreColor(score);
                  
                  return (
                    <div key={domain} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium capitalize">{domain}</span>
                        <Badge variant="secondary" className={`bg-${color}/10 text-${color}`}>
                          {score}/100
                        </Badge>
                      </div>
                      <div className="w-full bg-progress-bg rounded-full h-2">
                        <div
                          className={`bg-${color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Consider discussing these results with your healthcare provider</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Maintain regular physical exercise and mental stimulation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Consider retaking this assessment in 6-12 months</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Focus on memory exercises and cognitive training</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => navigate('/dashboard')}
                >
                  <FileText className="h-4 w-4" />
                  View Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => navigate('/')}
                >
                  <Home className="h-4 w-4" />
                  Take New Assessment
                </Button>
              </div>
            </Card>

            {/* Understanding Your Results */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Understanding Your Results</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded bg-success" />
                    <span className="font-medium">Low Risk</span>
                  </div>
                  <p className="text-xs">Normal cognitive function</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded bg-amber-500" />
                    <span className="font-medium">Medium Risk</span>
                  </div>
                  <p className="text-xs">Some areas may need attention</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded bg-destructive" />
                    <span className="font-medium">High Risk</span>
                  </div>
                  <p className="text-xs">Recommend professional consultation</p>
                </div>
              </div>
            </Card>

            {/* Important Notice */}
            <Card className="p-6 bg-accent/30 border-accent">
              <h3 className="font-semibold mb-2 text-accent-foreground">Important Notice</h3>
              <p className="text-xs text-accent-foreground">
                This screening tool provides preliminary insights only. 
                Always consult healthcare professionals for comprehensive evaluation and diagnosis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}