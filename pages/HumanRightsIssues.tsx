
import React from 'react';
import { 
  Users, Baby, Briefcase, Landmark, Shield, 
  Accessibility, AlertTriangle, Users2, ShieldAlert
} from 'lucide-react';

const HumanRightsIssues: React.FC = () => {
  const issues = [
    {
      id: 'women',
      title: "Women's Rights",
      icon: <Users className="w-10 h-10" />,
      explanation: "Women's rights are fundamental human rights. In the Indian context, this includes the right to live without violence, to be educated, to own property, and to receive equal pay.",
      violations: ["Domestic violence", "Dowry harassment", "Workplace discrimination", "Human trafficking"],
      prevention: "Strengthen social reporting, immediate police intervention, and gender sensitivity training."
    },
    {
      id: 'child',
      title: "Child Rights",
      icon: <Baby className="w-10 h-10" />,
      explanation: "Every child has the right to survival, protection, development, and participation. AIHRPC focuses on the Right to Education (RTE) and eradication of child labor.",
      violations: ["Child labor", "Sexual abuse (POCSO violations)", "Child marriage", "Malnutrition"],
      prevention: "Community vigilance, mandatory schooling, and strict enforcement of labor laws."
    },
    {
      id: 'seniors',
      title: "Old Age Rights",
      icon: <Landmark className="w-10 h-10" />,
      explanation: "Elders deserve to live with dignity and adequate healthcare. The Maintenance and Welfare of Parents and Senior Citizens Act provides legal recourse for abandoned elders.",
      violations: ["Abandonment by children", "Physical abuse", "Property grabbing", "Neglect of health"],
      prevention: "Legal awareness of maintenance rights and social support circles."
    },
    {
      id: 'economic',
      title: "Economic Crimes",
      icon: <Briefcase className="w-10 h-10" />,
      explanation: "Financial exploitation, particularly of the poor and middle class, is a human rights concern as it strips people of their livelihood and dignity.",
      violations: ["Ponzi schemes", "Banking frauds", "Employment scams", "Land grabbing"],
      prevention: "Financial literacy and prompt reporting to Economic Offences Wing (EOW)."
    },
    {
      id: 'labor',
      title: "Labour Rights",
      icon: <ShieldAlert className="w-10 h-10" />,
      explanation: "Ensuring fair wages, safe working conditions, and the right to collective bargaining for both organized and unorganized sectors.",
      violations: ["Bonded labor", "Wage theft", "Unsafe working environments", "Forced overtime"],
      prevention: "Reporting to Labour Commission and awareness of Minimum Wages Act."
    },
    {
      id: 'minority',
      title: "Minority Rights",
      icon: <Users2 className="w-10 h-10" />,
      explanation: "Protection of cultural, religious, and linguistic identity as guaranteed under Articles 29 and 30 of the Indian Constitution.",
      violations: ["Hate speech", "Discrimination in housing/jobs", "Interference in education", "Social boycott"],
      prevention: "Prompt legal action against communal violence and monitoring inclusive policies."
    },
    {
      id: 'disability',
      title: "Disability Rights",
      icon: <Accessibility className="w-10 h-10" />,
      explanation: "Rights of Persons with Disabilities (RPWD) Act ensures accessibility, reservation in jobs, and equal treatment in all public spheres.",
      violations: ["Lack of accessibility in buildings", "Denied employment", "Mockery and harassment", "Resource deprivation"],
      prevention: "Audit of public infrastructure and enforcement of reservation quotas."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#800000] mb-6 text-center uppercase tracking-tight">Specific Human Rights Concerns</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            Our mission is to safeguard the rights of every section of society. 
            Select a category to understand typical violations and how to report them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center mb-8">
                  <div className="p-4 bg-[#800000] text-white rounded-2xl mr-6 group-hover:bg-[#F58220] transition-colors duration-500">
                    {issue.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">{issue.title}</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#800000] font-black text-xs uppercase tracking-widest mb-2">Detailed Explanation</h4>
                    <p className="text-slate-700 leading-relaxed font-medium">{issue.explanation}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-red-600 font-black text-xs uppercase tracking-widest mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" /> Common Violations
                      </h4>
                      <ul className="space-y-2">
                        {issue.violations.map(v => (
                          <li key={v} className="text-slate-600 text-sm font-medium flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#F58220] rounded-full mr-2"></span> {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-600 font-black text-xs uppercase tracking-widest mb-3 flex items-center">
                        <Shield className="w-4 h-4 mr-2" /> What Citizens Can Do
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">{issue.prevention}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-slate-200">
                 <button className="text-[#800000] font-black flex items-center hover:text-[#F58220] transition-colors uppercase text-xs tracking-widest">
                    Report a {issue.title} violation &rarr;
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HumanRightsIssues;
