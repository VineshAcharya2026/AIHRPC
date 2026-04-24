
import React from 'react';
import { User, MapPin, Award, Shield } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#800000] mb-4 uppercase tracking-tighter">National Command & Leadership</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Dedicated statutory experts and state coordinators working to uphold human dignity across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200 group">
              <div className="h-72 overflow-hidden relative">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 right-6 bg-[#800000] text-white p-3 rounded-2xl shadow-2xl border-2 border-white/20">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 text-center bg-white relative">
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{member.name}</h3>
                <p className="text-[#F58220] font-black text-[10px] uppercase tracking-widest mb-6">{member.role}</p>
                <div className="flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest border-t pt-6 border-slate-50">
                  <MapPin className="w-4 h-4 mr-2 text-[#800000]" />
                  {member.state} Jurisdiction
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-black rounded-[4rem] p-16 text-white text-center relative overflow-hidden border-b-8 border-[#F58220]">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Shield className="w-[400px] h-[400px] absolute -right-20 -bottom-20" />
          </div>
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Join the Statutory Network</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto font-medium text-lg">
            We are identifying passionate state coordinators and district members 
            to expand our human rights oversight across the subcontinent.
          </p>
          <button className="bg-[#800000] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#F58220] transition-all shadow-2xl border-b-4 border-black/50">
            Submit Commission Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
