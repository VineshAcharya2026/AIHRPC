
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-8">
            <Logo className="h-10 object-contain brightness-110" />
            <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">AIHRPC<br/><span className="text-[10px] text-[#F58220]">INDIA</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-8 font-medium">
            Standing at the forefront of human rights protection in the Indian subcontinent. 
            Empowering the marginalized through legal awareness and statutory intervention.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-black mb-8 border-l-4 border-[#F58220] pl-4 uppercase text-xs tracking-widest">Internal Portal</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-wide">
            <li><Link to="/about" className="hover:text-[#F58220] transition-colors">History & Ethos</Link></li>
            <li><Link to="/services" className="hover:text-[#F58220] transition-colors">Assistance Registry</Link></li>
            <li><Link to="/grievance" className="hover:text-[#F58220] transition-colors">File Grievance</Link></li>
            <li><Link to="/legal-info" className="hover:text-[#F58220] transition-colors">IPC & CrPC Guide</Link></li>
          </ul>
        </div>

        {/* Rights */}
        <div>
          <h4 className="text-white font-black mb-8 border-l-4 border-[#F58220] pl-4 uppercase text-xs tracking-widest">Citizen Charter</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-wide">
            <li><Link to="/issues" className="hover:text-[#F58220] transition-colors">Women Rights</Link></li>
            <li><Link to="/issues" className="hover:text-[#F58220] transition-colors">Child Vigilance</Link></li>
            <li><Link to="/issues" className="hover:text-[#F58220] transition-colors">Senior Care</Link></li>
            <li><Link to="/issues" className="hover:text-[#F58220] transition-colors">Labor Statutes</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-black mb-8 border-l-4 border-[#F58220] pl-4 uppercase text-xs tracking-widest">Contact Desk</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-4 text-[#F58220] flex-shrink-0" />
              <span className="font-medium text-slate-300">Central HQ: Delhi, India</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-4 text-[#F58220]" />
              <span className="font-medium text-slate-300">+91 9XXXXXXXXX</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-4 text-[#F58220]" />
              <a href="mailto:aihrpcindia@gmail.com" className="hover:text-[#F58220] font-medium text-slate-300">aihrpcindia@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-slate-900">
        <div className="bg-[#111] p-6 rounded-2xl border border-slate-800 mb-8">
           <p className="text-[10px] text-slate-500 leading-relaxed text-center font-medium max-w-4xl mx-auto">
            STATUTORY DISCLAIMER: All India Human Rights Protection Commission (AIHRPC) is an independent non-statutory organization. 
            We are not a government agency. We function as a civil society body dedicated to legal awareness, advocacy, 
            and social justice under the framework of Indian Trust/Society laws.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black tracking-widest text-slate-600 uppercase">
            &copy; {new Date().getFullYear()} AIHRPC INDIA. SECURED PORTAL.
          </p>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-tighter text-slate-500">
            <Link to="#" className="hover:text-[#F58220]">Integrity Policy</Link>
            <Link to="#" className="hover:text-[#F58220]">Terms of Usage</Link>
            <Link to="#" className="hover:text-[#F58220]">Registry Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
