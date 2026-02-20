// src/api.js
const API = import.meta.env.VITE_API_URL;

async function parseJson(res) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

export async function getHealth() {
  const res = await fetch(`${API}/health`);
  const data = await parseJson(res);
  if (!res.ok) throw new Error(data?.message || "Health check failed");
  return data;
}

export async function getTransactions() {
  const res = await fetch(`${API}/transactions`);
  const data = await parseJson(res);
  if (!res.ok) throw new Error(data?.message || "Failed to fetch transactions");
  return data;
}

export async function addTransaction(payload) {
  const res = await fetch(`${API}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await parseJson(res);
  if (!res.ok) throw new Error(data?.message || "Failed to add transaction");
  return data;
}