import { 
  Handshake, 
  TrendingUp, 
  Briefcase, 
  Building2, 
  BarChart3, 
  Wallet 
} from 'lucide-react';

export const services = [
  {
    id: 'joint-ventures',
    title: 'Joint Ventures',
    subtitle: 'Cross-border Strategic Alliances',
    description: 'Specialized advisory for international partnerships, facilitating cross-border growth and market entry strategies.',
    icon: Handshake,
    path: '/services/joint-ventures'
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    subtitle: 'Debt & Equity Solutions',
    description: 'Comprehensive financial structuring, capital raising, and optimization of corporate balance sheets.',
    icon: TrendingUp,
    path: '/services/corporate-finance'
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    subtitle: 'Buy-side & Sell-side Advisory',
    description: 'End-to-end support for corporate consolidations, divestitures, and strategic acquisitions.',
    icon: Building2,
    path: '/services/mergers-acquisitions'
  },
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    subtitle: 'Strategic Advisory & Transactional Excellence',
    description: 'High-stakes deal making and capital market advisory for complex financial requirements.',
    icon: Briefcase,
    path: '/services/investment-banking'
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    subtitle: 'Operational & Strategic Growth',
    description: 'Driving efficiency and long-term value creation through data-driven business insights.',
    icon: BarChart3,
    path: '/services/business-consulting'
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    subtitle: 'Preserving & Growing Capital',
    description: 'Tailored investment strategies for high-net-worth individuals and corporate entities.',
    icon: Wallet,
    path: '/services/wealth-management'
  }
];
