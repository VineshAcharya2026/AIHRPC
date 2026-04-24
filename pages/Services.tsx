
import React from 'react';
import { Scale, MessageCircle, FileText, Users, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Legal Guidance & Assistance",
      desc: "Our panel of advocates provides preliminary legal advice to victims of rights violations, helping them understand their legal standing.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Human Rights Awareness",
      desc: "We organize seminars, workshops, and school programs to educate citizens about the Constitution of India and their fundamental rights.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Complaint Forwarding",
      desc: "We assist citizens in drafting and forwarding official complaints to appropriate statutory bodies like NHRC, NCW, and Police Authorities.",
      icon: <ArrowRight className="w-8 h-8" />
    },
    {
      title: "Counseling Support",
      desc: "Specialized counseling for survivors of domestic violence, trafficking, and workplace harassment to help them rebuild their lives.",
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: "Documentation Assistance",
      desc: "Assisting marginalized groups in securing essential documents like Aadhaar, Voter ID, and Welfare Scheme registrations.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Member Coordination",
      desc: "A vast network of district members who act as first responders to reported local human rights issues.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#800000] mb-4">Our Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We offer a range of support services to ensure every citizen has a voice and access to justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-red-50 text-[#800000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 border-2 border-[#800000] flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/5 rounded-full -mr-16 -mt-16"></div>
          <div className="mb-8 md:mb-0 relative z-10">
            <h2 className="text-3xl font-bold text-[#800000] mb-2 uppercase tracking-tight">Need Immediate Assistance?</h2>
            <p className="text-slate-600 font-medium">Our grievance cell is operational for urgent human rights complaints.</p>
          </div>
          <Link to="/grievance" className="bg-[#F58220] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black shadow-lg transition-all relative z-10">
            Submit a Request Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
