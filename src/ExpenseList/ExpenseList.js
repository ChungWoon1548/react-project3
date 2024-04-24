import React, { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [filterType, setFilterType] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredExpenses = expenses
    .filter((expense) => (filterType ? expense.type === filterType : true))
    .filter((expense) =>
      startDate ? new Date(expense.purchaseDate) >= startDate : true
    )
    .filter((expense) =>
      endDate ? new Date(expense.purchaseDate) <= endDate : true
    );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    switch (sortOption) {
      case "high":
        return b.price - a.price;
      case "low":
        return a.price - b.price;
      case "latest":
        return new Date(b.purchaseDate) - new Date(a.purchaseDate);
      case "oldest":
        return new Date(a.purchaseDate) - new Date(b.purchaseDate);
      default:
        return 0;
    }
  });

  return (
    <div>
      <h2>소비 항목 리스트</h2>
      <label>
        유형별 필터:
        <input
          type="text"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        />
      </label>
      <label>
        정렬 기준:
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="high">가격 높은 순</option>
          <option value="low">가격 낮은 순</option>
          <option value="latest">최신 순</option>
          <option value="oldest">오래된 순</option>
        </select>
      </label>
      <label>
        기간 필터:
        <div>
          시작일:{" "}
          <input
            type="date"
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </div>
        <div>
          종료일:{" "}
          <input
            type="date"
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
      </label>
      <ul>
        {sortedExpenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.name}</strong> - {expense.type}, 가격:{" "}
            {expense.price}, 날짜:{" "}
            {expense.purchaseDate.toISOString().split("T")[0]}
            {expense.isRepurchase && `, 메모: ${expense.memo}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
