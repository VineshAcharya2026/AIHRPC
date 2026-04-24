
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, FileText, Users, Search, 
  Filter, CheckCircle, Clock, AlertCircle,
  Download, Mail
} from 'lucide-react';
import { AuthState } from '../types';
import { LOGO_URL } from '../constants';

interface AdminDashboardProps {
  auth: AuthState;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ auth }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'grievances' | 'members'>('overview');
  const [complaints, setComplaints] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchComplaints = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/admin/complaints');
      if (response.ok) {
        const data = await response.json();
        const mapped = data.map((c: any) => ({
          id: c.id,
          fullName: c.full_name,
          email: c.email,
          mobile: c.mobile,
          state: c.state,
          district: c.district,
          category: c.category,
          description: c.description,
          status: c.status,
          type: c.type,
          createdAt: c.created_at
        }));
        setComplaints(mapped);
      }
    } catch (error) {
      console.error("Failed to fetch complaints", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:8000/admin/complaints/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setComplaints(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
      }
    } catch (err) {
      alert("Status change failed at registry level.");
    }
  };

  const filteredComplaints = complaints.filter(c => 
    c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: complaints.length,
    pending: complaints.filter(c => c.status === 'Pending').length,
    resolved: complaints.filter(c => c.status === 'Resolved').length,
    review: complaints.filter(c => c.status === 'Under Review').length,
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-black text-slate-400 flex flex-col border-r border-slate-900 shadow-2xl z-20">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-10 pb-10 border-b border-slate-900">
            <img src={LOGO_URL} alt="Logo" className="h-12 w-12 object-contain" />
            <div className="border-l pl-3 border-slate-800">
              <p className="text-white font-black text-sm uppercase tracking-widest leading-none">AIHRPC</p>
              <p className="text-[8px] font-bold text-[#F58220] uppercase tracking-widest mt-1">Registry Admin</p>
            </div>
          </div>
          <nav className="space-y-3">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center px-5 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest ${activeTab === 'overview' ? 'bg-[#800000] text-white shadow-[0_10px_20px_-5px_rgba(128,0,0,0.5)]' : 'hover:bg-slate-900 hover:text-white'}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-4" /> Overview
            </button>
            <button 
              onClick={() => setActiveTab('grievances')}
              className={`w-full flex items-center px-5 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest ${activeTab === 'grievances' ? 'bg-[#800000] text-white shadow-[0_10px_20px_-5px_rgba(128,0,0,0.5)]' : 'hover:bg-slate-900 hover:text-white'}`}
            >
              <FileText className="w-5 h-5 mr-4" /> Dossiers
            </button>
            <button 
              onClick={() => setActiveTab('members')}
              className={`w-full flex items-center px-5 py-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest ${activeTab === 'members' ? 'bg-[#800000] text-white shadow-[0_10px_20px_-5px_rgba(128,0,0,0.5)]' : 'hover:bg-slate-900 hover:text-white'}`}
            >
              <Users className="w-5 h-5 mr-4" /> Command Team
            </button>
          </nav>
        </div>
        <div className="mt-auto p-8 bg-[#111]">
           <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#800000] rounded-xl flex items-center justify-center font-black text-white">AD</div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black text-[#F58220] uppercase tracking-widest">Master Admin</p>
                <p className="text-[11px] text-slate-300 font-bold truncate">{auth.user?.email}</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-12 bg-slate-50/50">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
               <div className="w-16 h-16 border-4 border-[#800000] border-t-[#F58220] rounded-full animate-spin mx-auto mb-6"></div>
               <p className="text-slate-400 font-black text-[11px] uppercase tracking-[0.4em]">Querying National Database...</p>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto space-y-12">
            {activeTab === 'overview' && (
              <div className="space-y-12 animate-fade-in">
                <div className="flex justify-between items-end border-b border-slate-200 pb-10">
                   <div>
                     <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Statutory Command</h1>
                     <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest mt-2 flex items-center">
                       <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> System Live & Vigilant
                     </p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Local Session Time</p>
                      <p className="text-lg font-black text-slate-900 font-mono tracking-tighter uppercase">{new Date().toLocaleTimeString('en-IN')}</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <StatCard icon={<FileText />} label="All Filings" val={stats.total} color="maroon" />
                  <StatCard icon={<Clock />} label="Awaiting Triage" val={stats.pending} color="orange" />
                  <StatCard icon={<AlertCircle />} label="In Investigation" val={stats.review} color="maroon" />
                  <StatCard icon={<CheckCircle />} label="Closed Cases" val={stats.resolved} color="black" />
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                   <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                      <h3 className="font-black text-xl text-slate-900 tracking-tighter uppercase">Recent Incident Log</h3>
                      <button onClick={() => setActiveTab('grievances')} className="bg-[#800000] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-black transition-all">View All Entries &rarr;</button>
                   </div>
                   <div className="overflow-x-auto">
                     <table className="w-full text-left">
                       <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black tracking-widest">
                         <tr>
                           <th className="px-10 py-6">Incident CID</th>
                           <th className="px-10 py-6">Primary Complainant</th>
                           <th className="px-10 py-6">Statute Domain</th>
                           <th className="px-10 py-6">Registry Status</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                         {complaints.slice(0, 5).map(item => (
                           <tr key={item.id} className="hover:bg-slate-50/80 transition-all">
                             <td className="px-10 py-8 font-mono text-xs font-black text-[#800000]">{item.id}</td>
                             <td className="px-10 py-8">
                                <p className="font-black text-slate-900 text-lg tracking-tight leading-none">{item.fullName}</p>
                                <p className="text-[10px] text-slate-400 uppercase font-black mt-2 tracking-widest">{item.mobile}</p>
                             </td>
                             <td className="px-10 py-8 text-xs font-black uppercase tracking-widest text-slate-600">{item.category}</td>
                             <td className="px-10 py-8">
                               <StatusBadge status={item.status} />
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'grievances' && (
              <div className="space-y-10 animate-fade-in">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Case Inventory</h1>
                  <button className="flex items-center bg-black text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#800000] transition-all shadow-2xl">
                    <Download className="w-4 h-4 mr-3" /> Download Classified CSV
                  </button>
                </div>
                
                <div className="relative">
                   <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6" />
                   <input 
                     type="text" 
                     placeholder="Search Registry by CID, Name or Region..."
                     className="w-full pl-16 pr-8 py-6 rounded-3xl border border-slate-200 outline-none focus:ring-4 focus:ring-maroon-500/10 focus:border-[#800000] transition-all font-bold text-lg tracking-tight bg-white"
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                   />
                </div>

                <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
                   <table className="w-full text-left border-collapse">
                     <thead className="bg-slate-900 text-slate-500 text-[10px] uppercase font-black tracking-[0.2em] border-b border-slate-800">
                       <tr>
                         <th className="px-10 py-8">CID</th>
                         <th className="px-10 py-8">Filing Entity</th>
                         <th className="px-10 py-8">Triage Control</th>
                         <th className="px-10 py-8">Action Desk</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       {filteredComplaints.map(item => (
                         <tr key={item.id} className="hover:bg-slate-50 transition-all">
                            <td className="px-10 py-10 font-mono font-black text-[#800000] text-sm">{item.id}</td>
                            <td className="px-10 py-10">
                               <p className="font-black text-slate-900 text-xl tracking-tighter">{item.fullName}</p>
                               <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2">{item.state} &bull; {item.district}</p>
                            </td>
                            <td className="px-10 py-10">
                               <div className="relative inline-block w-full max-w-[180px]">
                                 <select 
                                   className="w-full text-[10px] font-black bg-slate-100 border border-slate-200 px-5 py-3.5 rounded-xl outline-none appearance-none focus:border-[#800000] uppercase tracking-widest"
                                   value={item.status}
                                   onChange={(e) => updateStatus(item.id, e.target.value)}
                                 >
                                   <option value="Pending">PENDING TRIAGE</option>
                                   <option value="Under Review">INVESTIGATION</option>
                                   <option value="Resolved">CLOSED/RESOLVED</option>
                                 </select>
                               </div>
                            </td>
                            <td className="px-10 py-10">
                               <div className="flex gap-3">
                                  <button className="bg-slate-100 hover:bg-[#F58220] hover:text-white p-4 rounded-xl transition-all shadow-sm">
                                    <Mail className="w-5 h-5" />
                                  </button>
                                  <button className="bg-slate-100 hover:bg-black hover:text-white p-4 rounded-xl transition-all shadow-sm">
                                    <FileText className="w-5 h-5" />
                                  </button>
                               </div>
                            </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                   {filteredComplaints.length === 0 && (
                     <div className="p-32 text-center">
                        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                           <Search className="w-10 h-10 text-slate-200" />
                        </div>
                        <p className="text-slate-400 font-black text-xs uppercase tracking-[0.5em]">No matching records in registry</p>
                     </div>
                   )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, val, color }: any) => {
  const colorMap: any = {
    maroon: 'bg-[#800000] text-white border-transparent',
    orange: 'bg-[#F58220] text-white border-transparent',
    black: 'bg-black text-white border-transparent'
  };

  return (
    <div className={`p-10 rounded-[2.5rem] shadow-2xl transition-all hover:-translate-y-2 border-b-8 border-black/20 ${colorMap[color] || ''}`}>
      <div className={`p-3 rounded-2xl w-14 h-14 flex items-center justify-center mb-8 bg-white/20`}>{icon}</div>
      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">{label}</h3>
      <p className="text-5xl font-black tracking-tighter">{val}</p>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const style = status === 'Pending' ? { backgroundColor: '#F582201a', color: '#F58220', borderColor: '#F5822033' } : 
                 status === 'Under Review' ? { backgroundColor: '#8000001a', color: '#800000', borderColor: '#80000033' } : 
                 { backgroundColor: '#10b9811a', color: '#10b981', borderColor: '#10b98133' };

  return (
    <span 
      style={style}
      className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase border tracking-[0.2em]`}
    >
      {status === 'Under Review' ? 'Investigation' : status}
    </span>
  );
};

export default AdminDashboard;
