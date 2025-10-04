import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Search, Calendar, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for dashboard
const mockSessions = [
  {
    id: "1",
    patientName: "John Smith",
    age: 68,
    date: "2024-09-23",
    riskLevel: "medium" as const,
    score: 72,
    caregiver: "Dr. Johnson"
  },
  {
    id: "2",
    patientName: "Mary Wilson", 
    age: 75,
    date: "2024-09-22",
    riskLevel: "low" as const,
    score: 85,
    caregiver: "Self-administered"
  },
  {
    id: "3",
    patientName: "Robert Brown",
    age: 82,
    date: "2024-09-21", 
    riskLevel: "high" as const,
    score: 45,
    caregiver: "Nurse Smith"
  }
];

const getRiskBadgeColor = (risk: string) => {
  switch (risk) {
    case "low": return "bg-success text-success-foreground";
    case "medium": return "bg-warning text-warning-foreground";
    case "high": return "bg-destructive text-destructive-foreground";
    default: return "bg-secondary text-secondary-foreground";
  }
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("recent");

  const filteredSessions = mockSessions.filter(session =>
    session.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Assessment Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of cognitive screening sessions and results
            </p>
          </div>
          
          <Button 
            variant="medical" 
            onClick={() => navigate('/')}
          >
            New Assessment
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-warning/20 flex items-center justify-center">
                <span className="text-lg font-bold text-warning">!</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">High Risk</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <TabsList>
                <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
                <TabsTrigger value="high-risk">High Risk</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>

            <TabsContent value="recent">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Administered By</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          {session.patientName}
                        </div>
                      </TableCell>
                      <TableCell>{session.age}</TableCell>
                      <TableCell>{session.date}</TableCell>
                      <TableCell>
                        <Badge className={getRiskBadgeColor(session.riskLevel)}>
                          {session.riskLevel.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{session.score}/100</span>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {session.caregiver}
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => navigate('/results')}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="high-risk">
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High Risk Patients</h3>
                <p className="text-muted-foreground mb-4">
                  Filtered view of patients requiring immediate attention
                </p>
                <Button variant="outline">
                  View High Risk Cases
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analytics and reporting tools
                </p>
                <Button variant="outline">
                  View Analytics
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}