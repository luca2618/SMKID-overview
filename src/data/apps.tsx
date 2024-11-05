import { Brain, Signal, Code, Database, Laptop, TestTube,Trophy, Vote} from 'lucide-react';

export const apps = [
  {
    title: 'SMKID Point',
    description: 'Registrer frivellige aktiviter du gør i rådet',
    icon: <Trophy className="w-8 h-8" />,
    link: 'https://point.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'SMKID stemmesystem',
    description: 'Stemme system til brug under studierådsmøder',
    icon: <Vote className="w-8 h-8" />,
    link: 'https://www.vote.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'SMKID server status',
    description: 'Status på SMKID selv-hostede ressourcer og servere',
    icon: <Signal className="w-8 h-8" />,
    link: 'https://status.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Kodearkiv',
    description: 'Samarbejdsbaseret kodning og versionsstyring',
    icon: <Code className="w-8 h-8" />,
    link: 'https://github.com/SMKIDRaadet',
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