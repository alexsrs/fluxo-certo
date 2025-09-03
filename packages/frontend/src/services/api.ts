// Service para comunicação com a API do back-end

const API_BASE_URL = 'http://localhost:3001';

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  status: 'NEW' | 'QUALIFIED' | 'CONTACTED' | 'CONVERTED' | 'LOST';
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  status: 'NEW' | 'QUALIFIED' | 'CONTACTED' | 'CONVERTED' | 'LOST';
  createdAt: string;
  updatedAt: string;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Lead endpoints
  async createLead(data: CreateLeadRequest): Promise<Lead> {
    return this.request<Lead>('/api/leads', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getLeads(): Promise<Lead[]> {
    return this.request<Lead[]>('/api/leads');
  }

  async getLeadById(id: string): Promise<Lead> {
    return this.request<Lead>(`/api/leads/${id}`);
  }

  async updateLead(
    id: string,
    data: Partial<CreateLeadRequest>,
  ): Promise<Lead> {
    return this.request<Lead>(`/api/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteLead(id: string): Promise<void> {
    return this.request<void>(`/api/leads/${id}`, {
      method: 'DELETE',
    });
  }
}

export const api = new ApiService();
