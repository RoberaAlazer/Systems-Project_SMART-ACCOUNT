import React, { useEffect, useState } from "react";
import "./App.css";
import { getTransactions, addTransaction } from "./api";

function App() {
  const [activePage, setActivePage] = useState("createInvoice");
  const [apiStatus, setApiStatus] = useState("Checking backend...");
  const [transactions, setTransactions] = useState([]);
  const [txName, setTxName] = useState("");
  const [txAmount, setTxAmount] = useState("");
  const [txType, setTxType] = useState("income");
  const [clientName, setClientName] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [invoiceNotes, setInvoiceNotes] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/health`)
      .then((r) => r.json())
      .then((data) => setApiStatus(data.message || "Backend OK"))
      .catch(() => setApiStatus("Backend not reachable"));
  }, []);

 useEffect(() => {
  getTransactions()
    .then((data) => {
      const list = Array.isArray(data)
        ? data
        : data?.data || data?.transactions || [];
      setTransactions(Array.isArray(list) ? list : []);
    })
    .catch(console.error);
}, []);


  const handleAddTransaction = async (e) => {
    e.preventDefault();
    if (!txName || !txAmount) return;

    const created = await addTransaction({
      name: txName,
      amount: Number(txAmount),
      type: txType,
    });

    const newTx = created?.data || created?.transaction || created;

    setTransactions((prev) => [...prev, newTx]);
    setTxName("");
    setTxAmount("");
    setTxType("income");
  };

  const handleEditTransaction = (id) => {
    const tx = transactions.find((t) => t.id === id);
    if (!tx) return;
    const newName = window.prompt("Edit name:", tx.name);
    const newAmount = window.prompt("Edit amount:", tx.amount);
    const newType = window.prompt("Type: income or expense", tx.type);
    if (!newName || !newAmount || !newType) return;
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              name: newName,
              amount: Number(newAmount),
              type: newType.toLowerCase(),
            }
          : t
      )
    );
  };

  const handleDeleteTransaction = (id) => {
    if (!window.confirm("Delete this transaction?")) return;
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleGenerateInvoice = (e) => {
    e.preventDefault();
    if (!clientName || !invoiceAmount) return;
    alert(`Invoice Generated\nClient: ${clientName}\nAmount: $${invoiceAmount}`);
    setClientName("");
    setInvoiceAmount("");
    setInvoiceNotes("");
  };

  const handleLogout = () => {
    alert("Logged out.");
    setActivePage("login");
  };

  return (
    <div className="app-root">
      <div className="card">
        <header className="card-header">
          <h1 className="logo">
            Smart <span>Account</span>
          </h1>

          <p style={{ marginTop: 6, opacity: 0.85, fontSize: 14 }}>{apiStatus}</p>

          <nav className="nav-buttons">
            <button
              className={`nav-chip ${activePage === "login" ? "nav-chip-active" : ""}`}
              onClick={() => setActivePage("login")}
            >
              Login
            </button>

            <button
              className={`nav-chip ${activePage === "register" ? "nav-chip-active" : ""}`}
              onClick={() => setActivePage("register")}
            >
              Register
            </button>

            <button
              className={`nav-chip ${activePage === "dashboard" ? "nav-chip-active" : ""}`}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </button>

            <button
              className={`nav-chip ${activePage === "addTransaction" ? "nav-chip-active" : ""}`}
              onClick={() => setActivePage("addTransaction")}
            >
              Add Transaction
            </button>

            <button
              className={`nav-chip ${activePage === "createInvoice" ? "nav-chip-active" : ""}`}
              onClick={() => setActivePage("createInvoice")}
            >
              Create Invoice
            </button>

            <button className="nav-chip nav-chip-logout" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        </header>

        <main className="content">
          {activePage === "login" && (
            <section>
              <h2 className="section-title">Login</h2>
              <p className="section-sub">Demo Login</p>

              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" placeholder="you@example.com" className="input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" placeholder="••••••••" className="input" />
                </div>

                <button className="primary-button" onClick={() => setActivePage("dashboard")}>
                  Login
                </button>
              </form>
            </section>
          )}

          {activePage === "register" && (
            <section>
              <h2 className="section-title">Register</h2>
              <p className="section-sub">Create Account</p>

              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" placeholder="Your name" className="input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" placeholder="you@example.com" className="input" />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input type="password" placeholder="Create a password" className="input" />
                </div>

                <button className="primary-button" onClick={() => setActivePage("dashboard")}>
                  Register
                </button>
              </form>
            </section>
          )}

          {activePage === "dashboard" && (
            <section>
              <h2 className="section-title">Dashboard</h2>
              <p className="section-sub">Recent Transactions</p>

              <TransactionsTable
                transactions={transactions}
                onEdit={handleEditTransaction}
                onDelete={handleDeleteTransaction}
              />
            </section>
          )}

          {activePage === "addTransaction" && (
            <section>
              <h2 className="section-title">Add Transaction</h2>
              <p className="section-sub">Income or Expense</p>

              <form className="form" onSubmit={handleAddTransaction}>
                <div className="form-group">
                  <label className="form-label">Transaction Name</label>
                  <input
                    type="text"
                    value={txName}
                    onChange={(e) => setTxName(e.target.value)}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Type</label>
                  <select
                    value={txType}
                    onChange={(e) => setTxType(e.target.value)}
                    className="input"
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <div className="currency-input">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      value={txAmount}
                      onChange={(e) => setTxAmount(e.target.value)}
                      className="currency-field"
                      step="0.01"
                    />
                  </div>
                </div>

                <button type="submit" className="primary-button">
                  Save Transaction
                </button>
              </form>

              <div className="divider" />
              <TransactionsTable
                transactions={transactions}
                onEdit={handleEditTransaction}
                onDelete={handleDeleteTransaction}
              />
            </section>
          )}

          {activePage === "createInvoice" && (
            <section>
              <h2 className="section-title">Create Invoice</h2>
              <p className="section-sub">Generate Invoice</p>

              <form className="form" onSubmit={handleGenerateInvoice}>
                <div className="form-group">
                  <label className="form-label">Client Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <div className="currency-input">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      value={invoiceAmount}
                      onChange={(e) => setInvoiceAmount(e.target.value)}
                      className="currency-field"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Notes</label>
                  <textarea
                    value={invoiceNotes}
                    onChange={(e) => setInvoiceNotes(e.target.value)}
                    className="input textarea"
                  />
                </div>

                <button type="submit" className="primary-button">
                  Generate Invoice
                </button>
              </form>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

function TransactionsTable({ transactions, onEdit, onDelete }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Type</th>
            <th className="table-right">Amount</th>
            <th className="table-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 && (
            <tr>
              <td colSpan="4" className="empty-row">
                No transactions yet.
              </td>
            </tr>
          )}
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.name}</td>
              <td style={{ color: tx.type === "income" ? "#16a34a" : "#dc2626" }}>
                {tx.type === "income" ? "Income" : "Expense"}
              </td>
              <td className="table-right">
                {tx.type === "expense" ? "-" : ""}${Number(tx.amount).toFixed(2)}
              </td>
              <td className="table-right">
                <button className="table-btn edit-btn" onClick={() => onEdit(tx.id)}>
                  Edit
                </button>
                <button className="table-btn delete-btn" onClick={() => onDelete(tx.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
