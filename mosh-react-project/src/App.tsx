import { useState } from "react";
import React from 'react';
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 20, category: 'Groceries' },
    { id: 3, description: 'ccc', amount: 30, category: 'Entertainment' },
    { id: 4, description: 'ddd', amount: 40, category: 'Utilities' },
  ]);

  const visibleExpenses = selectedCategory 
    ? expenses.filter((e) => e.category === selectedCategory) 
    : expenses;
  


    return (
      <div className="container mb-3">
        <div className="mb-5">
        <ExpenseForm 
          onSubmit={(expense) => {
            console.log('Form submitted:', expense); // Debugging log
            setExpenses([
              ...expenses, 
              { ...expense, id: expenses.length + 1 }
            ]);
          }} 
        />


        </div>
    
        <div className="mb-3">
          <ExpenseFilter 
            onSelectCategory={(category) => setSelectedCategory(category)} 
          />
        </div>
    
        <div className="mb-3">
          <ExpenseList 
            expenses={visibleExpenses} 
            onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} 
          />
        </div>
      </div>
    )
    
  }
export default App
