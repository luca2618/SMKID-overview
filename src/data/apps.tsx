import { Brain, Signal, Code, CalendarDays, Laptop, Instagram,Trophy, Vote} from 'lucide-react';

export const apps = [
  {
    title: 'SMKID Point',
    description: 'Registrer dine frivillige aktiviteter i rådet og optjen point for dit engagement.',
    icon: <Trophy className="w-8 h-8" />,
    link: 'https://point.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'SMKID stemmesystem',
    description: 'Effektivt stemmesystem til brug under studierådsmøderne.',
    icon: <Vote className="w-8 h-8" />,
    link: 'https://vote.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'SMKID server status',
    description: 'Se live status for SMKID’s selv-hostede ressourcer og servere.',
    icon: <Signal className="w-8 h-8" />,
    link: 'https://status.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Kodearkiv',
    description: 'Udforsk SMKID’s open source-projekter og softwareløsninger på vores GitHub.',
    icon: <Code className="w-8 h-8" />,
    link: 'https://github.com/SMKIDRaadet',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Nyheder og begivenheder',
    description: 'Få de seneste opdateringer om vores nyheder og kommende begivenheder ved at følge os på Facebook.',
    icon: <CalendarDays className="w-8 h-8" />,
    link: 'https://www.facebook.com/SMKIDCouncil',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Instagram',
    description: 'Følg med bag kulisserne på vores events og møder – se billeder og historier direkte fra vores Instagram-profil.',
    icon: <Instagram className="w-8 h-8" />,
    link: 'https://www.instagram.com/smkidraadetdtu/',
    color: 'from-custom-blue/80 to-custom-slate/90'
  }
];