
import React from 'react';
import { Gavel, Scale } from 'lucide-react';
import { LEGAL_SUMMARIES } from '../constants';

const LegalInfo: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#800000] mb-4">Legal Knowledge Base</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Empower yourself with basic knowledge of the Indian Penal Code (IPC) and 
            Code of Criminal Procedure (CrPC). Awareness is the first step to justice.
          </p>
        </div>

        {/* IPC Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-[#800000] p-6 flex items-center text-white">
            <Gavel className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold uppercase tracking-tight">Indian Penal Code (IPC) Summaries</h2>
          </div>
          <div className="p-8">
            <p className="mb-8 text-slate-700 font-medium italic">
              Simple explanations for common sections related to public welfare and safety.
            </p>
            <div className="space-y-6">
              {LEGAL_SUMMARIES.ipc.map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-[#800000] font-black text-2xl">Sec {item.section}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CrPC Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-black p-6 flex items-center text-white">
            <Scale className="w-8 h-8 mr-3 text-[#F58220]" />
            <h2 className="text-2xl font-bold uppercase tracking-tight">CrPC Procedures & Citizen Rights</h2>
          </div>
          <div className="p-8">
            <p className="mb-8 text-slate-700 font-medium italic">
              How to navigate the legal process when reporting a crime or facing arrest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LEGAL_SUMMARIES.crpc.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl border-2 border-slate-50 bg-white hover:border-[#F58220]/20 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#800000] text-white flex items-center justify-center rounded-full font-bold mr-3">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#800000]">{item.step}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-red-50 p-6 rounded-xl border border-red-100 text-center">
          <p className="text-sm text-[#800000]">
            <strong>Important Note:</strong> This information is for general awareness only. 
            For specific legal advice, please consult a certified advocate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
