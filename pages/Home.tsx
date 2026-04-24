
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Users, ArrowRight, Gavel } from 'lucide-react';
import { FOCUS_AREAS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Banner */}
      <section className="relative h-[650px] bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070" alt="Justice Concept" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <div className="flex items-center space-x-2 mb-8 animate-slide-up">
            <span className="w-12 h-1 bg-[#F58220]"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#F58220]">National Human Rights Advocacy</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-none max-w-5xl font-black tracking-tighter italic">
            Dignity for All, <br /><span className="text-[#F58220] not-italic">Justice for Every Voice.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
            AIHRPC India serves as a national platform for grievance redressal, legal empowerment, 
            and human rights awareness across 28 states.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/complaint" 
              className="bg-[#F58220] hover:bg-white hover:text-black text-white px-10 py-5 rounded-xl text-lg font-black flex items-center justify-center transition-all shadow-2xl uppercase tracking-tighter"
            >
              <FileText className="mr-3 w-6 h-6" /> Official Filing
            </Link>
            <Link 
              to="/grievance" 
              className="bg-white hover:bg-slate-200 text-[#800000] px-10 py-5 rounded-xl text-lg font-black flex items-center justify-center transition-all shadow-xl uppercase tracking-tighter"
            >
              Public Grievance
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-[#800000] py-12 text-white border-y-4 border-[#F58220]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-1">28</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70">States Active</span>
            </div>
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-1">500+</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Empaneled Members</span>
            </div>
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-1">10k+</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Grievances Processed</span>
            </div>
            <div>
              <span className="block text-4xl font-black tracking-tighter mb-1">100%</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-70">Independent Body</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-slate-100 rounded-3xl -z-10"></div>
              <h2 className="text-4xl font-black text-[#800000] mb-8 flex items-center uppercase tracking-tighter">
                Institutional Mandate
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100">
                    <ShieldCheck className="text-[#800000] w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Social Safety Net</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Building a robust framework to protect vulnerable citizens from institutional 
                      and social exploitation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-100">
                    <Users className="text-[#F58220] w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Citizen Empowerment</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Bridging the information gap between the Indian Constitution and the common citizen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
               <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-[#F58220]">Strategic Vision</h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-8 italic">
                 "To create an India where every individual lives without fear, protected by a network 
                 of informed advocacy and professional grievance redressal."
               </p>
               <Link to="/about" className="inline-flex items-center text-sm font-black uppercase tracking-widest hover:text-[#F58220] transition-colors">
                 The AIHRPC Roadmap <ArrowRight className="ml-3 w-5 h-5" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-20">
            <span className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em] mb-4 block">Operation Clusters</span>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Domain Specialization</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FOCUS_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-[#800000] group text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   {area.icon}
                </div>
                <div className="mb-8 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors duration-500">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{area.title}</h3>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed">{area.desc}</p>
                <Link to="/issues" className="text-[#800000] font-black text-xs uppercase tracking-[0.2em] flex items-center hover:text-[#F58220] transition-colors">
                  Investigation Profile <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="bg-black py-32 text-white text-center relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-5">
           <Gavel className="w-[500px] h-[500px] -ml-20 -mb-20 rotate-12" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
            Report Violations <br /><span className="text-[#F58220]">Anonymously & Safely</span>
          </h2>
          <p className="text-slate-400 text-xl mb-16 font-medium max-w-2xl mx-auto">
            Our statutory oversight wing ensures that every reported incident is verified 
            and escalated to the appropriate authorities with full confidentiality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/complaint" className="bg-[#800000] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all shadow-2xl uppercase tracking-tighter">
              Initiate Legal Intake
            </Link>
            <Link to="/grievance" className="bg-[#F58220] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl uppercase tracking-tighter">
              File Public Grievance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
