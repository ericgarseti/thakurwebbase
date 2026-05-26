import { 
  Handshake, 
  TrendingUp, 
  Building2, 
  Briefcase, 
  BarChart3, 
  Wallet,
  Coins,
  FileCheck
} from 'lucide-react';

export const services = [
  {
    id: 'joint-ventures',
    title: 'Joint Ventures',
    subtitle: 'Cross-border Strategic Alliances',
    description: 'Specialized advisory for international partnerships, facilitating cross-border growth and market entry strategies.',
    icon: Handshake,
    path: '/services/joint-ventures',
    features: [
      "Cross-Border Partners",
      "Strategic Alliances",
      "Synergy Assessment",
      "Market Entry Support"
    ]
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    subtitle: 'Debt & Equity Solutions',
    description: 'Comprehensive financial structuring, capital raising, and optimization of corporate balance sheets.',
    icon: TrendingUp,
    path: '/services/corporate-finance',
    features: [
      "Debt Syndication",
      "Capital Structuring",
      "Balance Sheet Tuning",
      "Working Capital Solutions"
    ]
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    subtitle: 'Buy-side & Sell-side Advisory',
    description: 'End-to-end support for corporate consolidations, divestitures, and strategic acquisitions.',
    icon: Building2,
    path: '/services/mergers-acquisitions',
    features: [
      "Buy-Side Advisory",
      "Sell-Side Advisory",
      "Valuation Analysis",
      "Post-Merger Integration"
    ]
  },
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    subtitle: 'Strategic Advisory & Transactional Excellence',
    description: 'High-stakes deal making and capital market advisory for complex financial requirements.',
    icon: Briefcase,
    path: '/services/investment-banking',
    features: [
      "Strategic Transactions",
      "Valuations & Fairness",
      "Capital Market Access",
      "Deal Structuring"
    ]
  },
  {
    id: 'private-equity',
    title: 'Private Equity Funding',
    subtitle: 'Growth Capital & Equity Partnerships',
    description: 'Sourcing and structuring private equity investments, matching high-growth enterprises with leading institutional investors, venture capital funds, and family offices.',
    icon: Coins,
    path: '/services/private-equity',
    features: [
      "Growth Capital Sourcing",
      "Venture Capital Access",
      "Term Sheet Negotiation",
      "Equity Structuring"
    ]
  },
  {
    id: 'trade-finance',
    title: 'Trade Finance Services',
    subtitle: 'LC, SBLC & Bank Guarantees',
    description: 'Facilitating global trade operations through strategic trade finance instruments to secure transactions and mitigate risk.',
    icon: FileCheck,
    path: '/services/trade-finance',
    features: [
      "Letter of Credit ( LC )",
      "Standby Letter of Credit ( SBLC )",
      "Bank Guarantee ( BG )"
    ]
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    subtitle: 'Operational & Strategic Growth',
    description: 'Driving efficiency and long-term value creation through data-driven business insights.',
    icon: BarChart3,
    path: '/services/business-consulting',
    features: [
      "Growth Strategies",
      "Operational Efficiency",
      "Change Management",
      "Market Feasibility"
    ]
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    subtitle: 'Preserving & Growing Capital',
    description: 'Tailored investment strategies for high-net-worth individuals and corporate entities.',
    icon: Wallet,
    path: '/services/wealth-management',
    features: [
      "Asset Allocation",
      "Portfolio Optimization",
      "Estate & Succession",
      "Risk Management"
    ]
  }
];
