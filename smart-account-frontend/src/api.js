const API = import.meta.env.VITE_API_URL;

export async function getTransactions() {
  const res = await fetch(`${API}/transactions`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function addTransaction(data) {
  const res = await fetch(`${API}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add");
  return res.json();
}
