
export interface Complaint {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  state: string;
  district: string;
  category: string;
  description: string;
  status: 'Pending' | 'Under Review' | 'Resolved';
  createdAt: string;
  type: 'Grievance' | 'Official Complaint';
  assignedTo?: string;
  incidentDate?: string;
  location?: string;
  against?: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  state: string;
  region?: string;
  photo: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  user: {
    email: string;
    role: 'Admin' | 'Member';
  } | null;
}
