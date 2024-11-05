import { Brain, Calculator, Code, Database, Laptop, TestTube } from 'lucide-react';

export const apps = [
  {
    title: 'AI Laboratorium',
    description: 'Adgang til maskinlæringsværktøjer og eksperimenter',
    icon: <Brain className="w-8 h-8" />,
    link: 'https://colab.research.google.com',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Matematik Arbejdsrum',
    description: 'Matematisk modellering og beregningsværktøjer',
    icon: <Calculator className="w-8 h-8" />,
    link: 'https://www.wolframalpha.com',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Kodearkiv',
    description: 'Samarbejdsbaseret kodning og versionsstyring',
    icon: <Code className="w-8 h-8" />,
    link: 'https://github.com',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Dataanalyse',
    description: 'Platform til datavisualisering og analyse',
    icon: <Database className="w-8 h-8" />,
    link: 'https://www.kaggle.com',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Forskningslaboratorium',
    description: 'Videnskabelig forskning og dokumentation',
    icon: <TestTube className="w-8 h-8" />,
    link: 'https://www.researchgate.net',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Virtuelt Laboratorium',
    description: 'Simulation og virtuelle eksperimenter',
    icon: <Laptop className="w-8 h-8" />,
    link: 'https://www.mathworks.com/products/matlab-online.html',
    color: 'from-custom-blue/80 to-custom-slate/90'
  }
];