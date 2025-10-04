import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  onChange?: (language: string) => void;
}

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
];

export function LanguageSelector({ onChange }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    if (supportedLang) {
      setSelectedLanguage(supportedLang.code);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    onChange?.(langCode);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.native}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}