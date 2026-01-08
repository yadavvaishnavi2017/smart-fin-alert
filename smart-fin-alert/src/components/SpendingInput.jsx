import { useState } from "react";

function SpendingInput({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  function handleAdd() {
    if (!amount || !note) return;

    onAdd({
      amount: Number(amount),
      note,
      date: new Date().toLocaleDateString(),
    });

    setAmount("");
    setNote("");
  }

  return (
    <div className="card">
      <h3>Add Spending</h3>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Where did you spend?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default SpendingInput;
