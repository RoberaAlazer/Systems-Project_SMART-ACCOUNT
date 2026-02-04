import { Router } from "express";
// import { authenticate } from "../middleware/authenticate";

const router = Router();

// router.use(authenticate);

type TxType = "income" | "expense";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  type: TxType;
  createdAt: string;
};

let transactions: Transaction[] = [
  { id: 1, name: "Groceries", amount: 120.5, type: "expense", createdAt: new Date().toISOString() },
  { id: 2, name: "Rent", amount: 950, type: "expense", createdAt: new Date().toISOString() },
];

router.get("/", (req, res) => {
  res.json(transactions);
});

router.post("/", (req, res) => {
  const { name, amount, type } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ success: false, message: "name is required" });
  }
  const numAmount = Number(amount);
  if (!Number.isFinite(numAmount)) {
    return res.status(400).json({ success: false, message: "amount must be a number" });
  }
  if (type !== "income" && type !== "expense") {
    return res.status(400).json({ success: false, message: "type must be income or expense" });
  }

  const newTx: Transaction = {
    id: Date.now(),
    name,
    amount: numAmount,
    type,
    createdAt: new Date().toISOString(),
  };

  transactions.push(newTx);
  res.status(201).json(newTx);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = transactions.findIndex((t) => t.id === id);
  if (idx === -1) return res.status(404).json({ success: false, message: "not found" });

  const { name, amount, type } = req.body;

  if (name !== undefined) transactions[idx].name = String(name);
  if (amount !== undefined) transactions[idx].amount = Number(amount);
  if (type !== undefined) transactions[idx].type = type;

  res.json(transactions[idx]);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = transactions.length;
  transactions = transactions.filter((t) => t.id !== id);
  if (transactions.length === before) return res.status(404).json({ success: false, message: "not found" });
  res.json({ success: true });
});

export default router;
