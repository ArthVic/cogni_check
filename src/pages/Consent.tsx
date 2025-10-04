import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Shield, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Consent() {
  const navigate = useNavigate();
  const [consents, setConsents] = useState({
    understand: false,
    participate: false,
    dataUsage: false,
    disclaimer: false
  });

  const allConsented = Object.values(consents).every(Boolean);

  const handleConsentChange = (key: keyof typeof consents, checked: boolean) => {
    setConsents(prev => ({ ...prev, [key]: checked }));
  };

  const handleSubmit = () => {
    if (allConsented) {
      navigate('/demographics');
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl pt-8">
        <Card className="p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Informed Consent</h1>
            <p className="text-muted-foreground">
              Please read and agree to the following before continuing
            </p>
          </div>

          <ScrollArea className="h-64 w-full border rounded-lg p-4 mb-6">
            <div className="space-y-4 text-sm">
              <section>
                <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Purpose of Assessment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This cognitive screening tool is designed to provide an initial assessment of memory and thinking abilities. 
                  It is not a diagnostic tool and cannot replace professional medical evaluation.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">What to Expect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The assessment includes questions about demographics, memory tasks, attention exercises, and speech recording. 
                  The entire process takes approximately 10-15 minutes.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">Data Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your responses and audio recordings are processed securely. Data is used solely for generating your 
                  assessment results and is not stored permanently without explicit consent.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Important Disclaimer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This screening tool is for informational purposes only. It does not provide medical diagnosis or treatment recommendations. 
                  If you have concerns about cognitive health, please consult with a qualified healthcare professional.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">Voluntary Participation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participation is completely voluntary. You may stop the assessment at any time without penalty or explanation.
                </p>
              </section>
            </div>
          </ScrollArea>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="understand"
                checked={consents.understand}
                onCheckedChange={(checked) => handleConsentChange('understand', checked as boolean)}
              />
              <label htmlFor="understand" className="text-sm leading-relaxed cursor-pointer">
                I understand that this is a screening tool and not a medical diagnosis
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox 
                id="participate"
                checked={consents.participate}
                onCheckedChange={(checked) => handleConsentChange('participate', checked as boolean)}
              />
              <label htmlFor="participate" className="text-sm leading-relaxed cursor-pointer">
                I voluntarily agree to participate in this cognitive assessment
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox 
                id="dataUsage"
                checked={consents.dataUsage}
                onCheckedChange={(checked) => handleConsentChange('dataUsage', checked as boolean)}
              />
              <label htmlFor="dataUsage" className="text-sm leading-relaxed cursor-pointer">
                I consent to the secure processing of my responses for assessment purposes
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox 
                id="disclaimer"
                checked={consents.disclaimer}
                onCheckedChange={(checked) => handleConsentChange('disclaimer', checked as boolean)}
              />
              <label htmlFor="disclaimer" className="text-sm leading-relaxed cursor-pointer">
                I acknowledge that this tool does not replace professional medical evaluation
              </label>
            </div>
          </div>

          <Button 
            onClick={handleSubmit} 
            disabled={!allConsented}
            variant="medical" 
            size="lg" 
            className="w-full"
          >
            I Agree - Begin Assessment
          </Button>
        </Card>
      </div>
    </div>
  );
}