const API_BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) || 'http://localhost:4000';

// Helper to make authenticated requests
const fetchWithAuth = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    credentials: 'include', // Include cookies for session
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return response;
};

export async function listFeedback() {
  const res = await fetchWithAuth(`${API_BASE}/api/feedback`);
  if (!res.ok) throw new Error('Failed to load feedback');
  return res.json();
}

export async function createFeedback({ content }) {
  const res = await fetchWithAuth(`${API_BASE}/api/feedback`, {
    method: 'POST',
    body: JSON.stringify({ content })
  });
  if (!res.ok) {
    if (res.status === 401) throw new Error('Please log in to post feedback');
    throw new Error('Failed to create feedback');
  }
  return res.json();
}

export async function createReply(feedbackId, { content }) {
  const res = await fetchWithAuth(`${API_BASE}/api/feedback/${feedbackId}/replies`, {
    method: 'POST',
    body: JSON.stringify({ content })
  });
  if (!res.ok) {
    if (res.status === 401) throw new Error('Please log in to reply');
    throw new Error('Failed to add reply');
  }
  return res.json();
}

// Auth API functions
export async function getCurrentUser() {
  const res = await fetchWithAuth(`${API_BASE}/api/auth/me`);
  if (res.status === 401) return null;
  if (!res.ok) throw new Error('Failed to get user info');
  return res.json();
}

export async function logout() {
  const res = await fetchWithAuth(`${API_BASE}/api/auth/logout`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error('Failed to logout');
  return res.json();
}

export function getGoogleLoginUrl() {
  return `${API_BASE}/api/auth/google`;
}


