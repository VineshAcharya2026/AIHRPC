
import React from 'react';
import { Target, BookOpen, UserCheck, AlertTriangle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#800000] mb-6 uppercase tracking-tight">About the Commission</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            The All India Human Rights Protection Commission (AIHRPC) is an independent, non-political organization 
            founded on the principles of social justice, equality, and humanity.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-[#800000] mb-6 flex items-center uppercase tracking-tight">
              <Target className="mr-3 text-[#F58220]" /> Our Objectives
            </h2>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To monitor human rights violations and provide legal assistance to the vulnerable.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To conduct nationwide awareness campaigns about constitutional rights.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To advocate for policy changes that protect marginalized communities.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To assist state and district administrations in grievance redressal.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-[#800000] mb-6 flex items-center uppercase tracking-tight">
              <BookOpen className="mr-3 text-[#F58220]" /> Scope of Work
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-medium">
              Our jurisdiction spans across 28 states and 8 union territories through a robust network 
              of coordinators and legal experts. We intervene in cases of:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-[11px] font-black text-[#800000] bg-white p-4 rounded-xl border border-slate-100 uppercase tracking-widest text-center">Police Inaction</div>
              <div className="text-[11px] font-black text-[#800000] bg-white p-4 rounded-xl border border-slate-100 uppercase tracking-widest text-center">Workplace Abuse</div>
              <div className="text-[11px] font-black text-[#800000] bg-white p-4 rounded-xl border border-slate-100 uppercase tracking-widest text-center">Child Protection</div>
              <div className="text-[11px] font-black text-[#800000] bg-white p-4 rounded-xl border border-slate-100 uppercase tracking-widest text-center">Elderly Welfare</div>
            </div>
          </div>
        </div>

        {/* Extra Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#800000] text-white p-10 rounded-[2.5rem] shadow-xl">
                <div className="flex items-center mb-6">
                    <UserCheck className="w-8 h-8 mr-4 text-[#F58220]" />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Member Ethics</h3>
                </div>
                <p className="text-slate-100 leading-relaxed font-medium">
                    Every member of AIHRPC undergoes rigorous background verification and is committed to 
                    upholding the highest standards of integrity and social accountability.
                </p>
            </div>
            <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-xl">
                <div className="flex items-center mb-6">
                    <AlertTriangle className="w-8 h-8 mr-4 text-red-500" />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Public Alert</h3>
                </div>
                <p className="text-slate-100 leading-relaxed font-medium">
                    We warn the public against any individual using the AIHRPC name for unauthorized 
                    monetary gains. Report such incidents immediately to our central HQ.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
