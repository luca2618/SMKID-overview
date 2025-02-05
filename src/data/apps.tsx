import { Info, Signal, Code, CalendarDays, Server, Instagram,Trophy, Vote, TrendingUp, Speaker, Coffee, Warehouse} from 'lucide-react';

export const apps = [
  {
    title: 'Hvad er SMKID?',
    description: 'Læs mere om, hvad SMKID er, og hvordan vi arbejder for at styrke studielivet og fællesskabet.',
    icon: <Info className="w-8 h-8" />,
    link: '/info',
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
    description: 'Følg med bag kulisserne på vores events og møder – se billeder og historier direkte på vores Instagram-profil.',
    icon: <Instagram className="w-8 h-8" />,
    link: 'https://www.instagram.com/smkidraadetdtu/',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
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
    title: 'SMKID servere',
    description: 'Få indsigt i SMKID’s serverressourcer, og hvordan du kan få din egen personlige server til projekter.',
    icon: <Server className="w-8 h-8" />,
    link: 'https://server.smkid.dk',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'DTU Course Analyzer',
    description: 'Analyserer og scorer kurser på DTU’s kursusbase baseret på evalueringer.',
    icon: <TrendingUp className="w-8 h-8" />,
    link: 'https://chromewebstore.google.com/detail/dtu-course-analyzer/bimhgdngikcnelkhjindmdghndfmdcde',
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'SMKID Soundboks Udlejning',
    description: 'Skru op for festen! Lån en Soundboks helt gratis til dit næste event. Perfekt til studiefester, arrangementer og hyggeaftener!',
    icon: <Speaker className="w-8 h-8" />,
    link: 'https://smkid.dk/soundboks-udlejning', // Husk at opdatere linket, hvis det skal være direkte til SMKID’s side
    color: 'from-custom-blue/80 to-custom-slate/90'
  },
  {
    title: 'Studiecafé',
    description: 'Få hjælp fra hjælpelærere og nyd gratis snacks. Altid hyggelig stemning!',
    icon: <Coffee className="w-8 h-8" />,
    link: 'studiecafe', // Opdater linket til den specifikke SMKID-side, hvis det findes
    color: 'from-custom-blue/80 to-custom-slate/90'
},
{
  title: 'SMKID Kælderen',
  description: 'SMKID-kælderen er til fri afbenyttelse indtil kl. 17:00, medmindre den er reserveret til et arrangement.',
  icon: <Warehouse className="w-8 h-8" />,
  link: 'kælder', // Opdater linket til den specifikke SMKID-side, hvis det findes
  color: 'from-custom-blue/80 to-custom-slate/90'
}

];