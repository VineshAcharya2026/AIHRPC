
import React from 'react';
import { 
  Users, Shield, Scale, Heart, AlertTriangle, 
  Baby, Briefcase, Landmark, Info, Accessibility 
} from 'lucide-react';

export const COLORS = {
  primary: '#800000', // Maroon
  accent: '#F58220',  // Orange
  background: '#F8FAFC',
  dark: '#000000'     // Black
};

export const LOGO_PRIMARY = "https://lh3.googleusercontent.com/d/1ze4-c8yp0IQo7HSp5syB9UijoG-2pwbt";
export const LOGO_FALLBACK = "https://drive.google.com/uc?id=1ze4-c8yp0IQo7HSp5syB9UijoG-2pwbt";
// Added LOGO_URL to fix import errors in Admin panels
export const LOGO_URL = LOGO_PRIMARY;

export const FOCUS_AREAS = [
  { 
    title: "Women's Rights", 
    icon: <Users className="w-8 h-8 text-[#800000]" />, 
    desc: "Protecting dignity and ensuring equal opportunities for women across India." 
  },
  { 
    title: "Child Rights", 
    icon: <Baby className="w-8 h-8 text-[#800000]" />, 
    desc: "Eradicating child labor and ensuring every child has access to education and safety." 
  },
  { 
    title: "Senior Citizens", 
    icon: <Landmark className="w-8 h-8 text-[#800000]" />, 
    desc: "Safeguarding the welfare and maintenance of our elders." 
  },
  { 
    title: "Economic Crimes", 
    icon: <Briefcase className="w-8 h-8 text-[#800000]" />, 
    desc: "Assisting victims of financial fraud and white-collar offences." 
  },
  { 
    title: "Human Trafficking", 
    icon: <Shield className="w-8 h-8 text-[#800000]" />, 
    desc: "Active intervention and support for survivors of illegal trade." 
  },
  { 
    title: "Domestic Violence", 
    icon: <Heart className="w-8 h-8 text-[#800000]" />, 
    desc: "Providing legal guidance and counseling for domestic abuse victims." 
  },
  {
    title: "Workplace Harassment",
    icon: <Accessibility className="w-8 h-8 text-[#800000]" />,
    desc: "Addressing violations of dignity and safety at the workplace."
  }
];

export const LEGAL_SUMMARIES = {
  ipc: [
    { section: "498A", title: "Cruelty by Husband or Relatives", desc: "Specifically covers physical and mental harassment for dowry or general domestic cruelty." },
    { section: "354", title: "Outraging Modesty of Woman", desc: "Covers assault or criminal force to women with intent to outrage modesty (non-bailable)." },
    { section: "375/376", title: "Sexual Offences", desc: "Stringent punishments for rape and other non-consensual sexual acts." },
    { section: "406/420", title: "Breach of Trust & Cheating", desc: "The primary sections for financial fraud, economic offences, and property grabbing." },
    { section: "317", title: "Exposure of Child", desc: "Covers abandonment and exposure of children under 12 years of age." },
    { section: "PCPNDT Act", title: "Gender Selection", desc: "Prevention of pre-conception and pre-natal diagnostic techniques for sex selection." }
  ],
  crpc: [
    { step: "Filing an FIR (Section 154)", desc: "Police must register a report for cognizable offences. Zero FIR can be filed in any station regardless of jurisdiction." },
    { step: "Rights during Arrest (Section 50)", desc: "Right to be informed of grounds of arrest, right to inform a relative, and right to legal aid." },
    { step: "Magistrate Production", desc: "Mandatory presentation before a Magistrate within 24 hours of arrest excluding travel time." },
    { step: "Section 200 Complaint", desc: "A citizen can directly approach a Magistrate if the police refuse to register an FIR." }
  ]
};

export const STATES_INDIA = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "J&K"
];

export const COMPLAINT_CATEGORIES = [
  "Women Rights Violation", "Child Abuse", "Domestic Violence", "Police Inaction", "Workplace Harassment",
  "Financial Fraud", "Senior Citizen Harassment", "Labor Rights Violation", "Human Trafficking", "Minority Rights", "Disability Rights", "Other"
];

export const TEAM_MEMBERS = [
  { id: '1', name: 'Dr. Ramesh Chandra', role: 'President', state: 'Delhi', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  { id: '2', name: 'Adv. Meenakshi Singh', role: 'Vice President', state: 'Uttar Pradesh', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  { id: '3', name: 'Sanjeev Kumar', role: 'General Secretary', state: 'Haryana', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
  { id: '4', name: 'Priya Verma', role: 'State Coordinator', state: 'Maharashtra', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' }
];
