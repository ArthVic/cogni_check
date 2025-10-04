import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Consent from "./pages/Consent";
import Demographics from "./pages/Demographics";
import SpeechIntro from "./pages/tasks/SpeechIntro";
import SpeechRecord from "./pages/tasks/SpeechRecord";
import MemoryIntro from "./pages/tasks/MemoryIntro";
import WordRecall from "./pages/tasks/WordRecall";
import DigitSpan from "./pages/tasks/DigitSpan";
import Completion from "./pages/tasks/Completion";
import Results from "./pages/Results";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/demographics" element={<Demographics />} />
          <Route path="/task/speech-intro" element={<SpeechIntro />} />
          <Route path="/task/speech-record" element={<SpeechRecord />} />
          <Route path="/task/memory-intro" element={<MemoryIntro />} />
          <Route path="/task/word-recall" element={<WordRecall />} />
          <Route path="/task/digit-span" element={<DigitSpan />} />
          <Route path="/task/completion" element={<Completion />} />
          <Route path="/results" element={<Results />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
