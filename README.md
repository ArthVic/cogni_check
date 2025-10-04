# CogniCheck - Cognitive Health Assessment Tool

A modern, privacy-focused web application for cognitive health screening and memory assessment. CogniCheck provides evidence-based cognitive tests in a user-friendly interface, helping users quickly assess their cognitive health with immediate results and recommendations.

## 🧠 Features

### Core Assessment Tools
- **Word Recall Test**: Memory assessment through word list memorization and recall
- **Digit Span Test**: Working memory evaluation with forward and backward number sequences
- **Speech Analysis**: Voice-based cognitive assessment (introductory phase)
- **Multi-language Support**: Language selector for accessibility

### User Experience
- **Quick Assessment**: Complete screening in 10-15 minutes
- **Progress Tracking**: Visual progress indicators throughout the assessment
- **Immediate Results**: Instant risk assessment and detailed scoring
- **Privacy-First**: No data storage without explicit consent
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Results & Analytics
- **Risk Level Assessment**: Low, Medium, or High risk categorization
- **Domain-Specific Scores**: Memory, attention, language, and orientation metrics
- **Detailed Breakdown**: Comprehensive analysis of cognitive performance
- **Actionable Recommendations**: Personalized next steps and healthcare guidance
- **Report Generation**: Downloadable assessment reports

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
git clone <YOUR_GIT_URL>
   cd cogni_check
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── LanguageSelector.tsx
│   ├── ProgressBar.tsx
│   └── RiskCard.tsx
├── pages/              # Application pages
│   ├── tasks/          # Assessment task components
│   ├── Auth.tsx        # Authentication page
│   ├── Consent.tsx     # Privacy consent
│   ├── Demographics.tsx # User demographics
│   ├── Results.tsx     # Assessment results
│   └── Dashboard.tsx   # User dashboard
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts

## 🧪 Assessment Components

### Word Recall Test
- Study phase with 30-second timer
- Audio playback support for accessibility
- 5-word list memorization and recall
- Visual and auditory presentation options

### Digit Span Test
- Forward and backward number sequences
- Progressive difficulty (3-5 digit sequences)
- Audio playback with visual confirmation
- Working memory assessment

### Speech Analysis
- Voice recording capabilities
- Speech pattern analysis
- Language processing assessment

## 📊 Results & Scoring

The application provides comprehensive scoring across multiple cognitive domains:

- **Memory**: Word recall performance
- **Attention**: Focus and concentration metrics
- **Language**: Speech and communication assessment
- **Orientation**: Spatial and temporal awareness

Risk levels are calculated based on evidence-based thresholds and provide clear guidance for next steps.

## 🔒 Privacy & Security

- **No Data Storage**: Assessment data is not stored without explicit consent
- **Client-Side Processing**: All calculations performed locally
- **Privacy-First Design**: Minimal data collection approach
- **Secure Communication**: HTTPS-only data transmission

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3 + CloudFront**: Upload to S3 and configure CloudFront
- **GitHub Pages**: Deploy directly from the repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## ⚠️ Medical Disclaimer

**Important**: This tool is for screening purposes only and does not replace professional medical diagnosis. Always consult healthcare professionals for comprehensive evaluation and diagnosis. The results should not be used as the sole basis for medical decisions.

## 🆘 Support

For support, questions, or feedback, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for cognitive health awareness and accessibility.
