import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [memo, setMemo] = useState("");
  const [isRepurchase, setIsRepurchase] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      name,
      price: parseFloat(price),
      type,
      purchaseDate,
      memo: isRepurchase ? memo : "",
      isRepurchase,
    };

    addExpense(expense);

    // Reset form fields
    setName("");
    setPrice("");
    setType("");
    setPurchaseDate(new Date());
    setMemo("");
    setIsRepurchase(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        가격:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        유형:
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </label>
      <label>
        구입 날짜:
        <DatePicker
          selected={purchaseDate}
          onChange={(date) => setPurchaseDate(date)}
        />
      </label>
      <label>
        메모:
        <input
          type="text"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          style={{ display: isRepurchase ? "block" : "none" }}
        />
      </label>
      <label>
        재구매 의사:
        <input
          type="checkbox"
          checked={isRepurchase}
          onChange={() => setIsRepurchase(!isRepurchase)}
        />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};

export default ExpenseForm;
