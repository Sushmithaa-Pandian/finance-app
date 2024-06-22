document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();
  
      
      if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password are required.';
      } else {
        
        errorMessage.textContent = '';
  
        
        window.location.href = 'dashboard.html';
      }
    });
  });
  

  // script.js

document.addEventListener('DOMContentLoaded', function() {
    
    const totalIncome = 5000.00;
    const totalExpenses = 3500.00;
    const progressVacation = 50; // Example progress percentage
  
    
    document.getElementById('totalIncome').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
  
    // Update progress bar for savings goal
    document.getElementById('progressVacation').value = progressVacation;
    document.getElementById('progressVacationText').textContent = `${progressVacation}%`;
  
    // Example: Create a chart using Chart.js
    const ctx = document.getElementById('spendingChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Groceries', 'Entertainment', 'Transportation', 'Utilities', 'Other'],
        datasets: [{
          label: 'Spending Categories',
          data: [300, 150, 200, 250, 100],
          backgroundColor: [
            '#007bff',
            '#28a745',
            '#ffc107',
            '#dc3545',
            '#17a2b8'
          ],
          borderWidth: 1
        }]
      }
    });
  });


  // script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example transaction data (replace with real data fetch)
    const transactions = [
      { date: '2024-06-25', category: 'Groceries', description: 'Grocery shopping', amount: 50.00 },
      { date: '2024-06-24', category: 'Entertainment', description: 'Movie tickets', amount: 25.00 },
      { date: '2024-06-23', category: 'Transportation', description: 'Gas refill', amount: 40.00 },
      { date: '2024-06-22', category: 'Utilities', description: 'Electricity bill', amount: 100.00 },
    ];
  
    const transactionTableBody = document.getElementById('transactionTableBody');
  
    // Function to render transactions in the table
    function renderTransactions() {
      transactionTableBody.innerHTML = '';
  
      transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${transaction.date}</td>
          <td>${transaction.category}</td>
          <td>${transaction.description}</td>
          <td>$${transaction.amount.toFixed(2)}</td>
          <td class="actions">
            <button onclick="editTransaction(${index})">Edit</button>
            <button onclick="deleteTransaction(${index})">Delete</button>
          </td>
        `;
        transactionTableBody.appendChild(row);
      });
    }
  
    // Initial render
    renderTransactions();
  
    // Example functions for edit and delete actions (replace with actual logic)
    window.editTransaction = function(index) {
      // Example: Redirect to edit page or show modal for editing
      alert(`Editing transaction ${index}`);
    }
  
    window.deleteTransaction = function(index) {
      // Example: Confirm deletion and remove transaction from list
      if (confirm(`Are you sure you want to delete transaction ${index}?`)) {
        transactions.splice(index, 1);
        renderTransactions(); // Refresh table
      }
    }
  });


  // script.js

document.addEventListener('DOMContentLoaded', function() {
    const goalsList = document.getElementById('goalsList');
    const addGoalForm = document.getElementById('addGoalForm');
  
    // Example initial goals (replace with real data fetch)
    let goals = [
      { id: 1, name: 'Vacation Fund', amount: 2000.00, saved: 1000.00 },
      { id: 2, name: 'Emergency Fund', amount: 5000.00, saved: 2500.00 }
    ];
  
    // Function to render goals list
    function renderGoals() {
      goalsList.innerHTML = '';
  
      goals.forEach(goal => {
        const goalCard = document.createElement('div');
        goalCard.classList.add('goal-card');
        goalCard.innerHTML = `
          <h3>${goal.name}</h3>
          <p>Goal Amount: $${goal.amount.toFixed(2)}</p>
          <p>Saved: $${goal.saved.toFixed(2)}</p>
          <progress value="${goal.saved}" max="${goal.amount}"></progress>
          <div class="goal-actions">
            <button onclick="editGoal(${goal.id})">Edit</button>
            <button onclick="deleteGoal(${goal.id})">Delete</button>
          </div>
        `;
        goalsList.appendChild(goalCard);
      });
    }
  
    // Initial render of goals
    renderGoals();
  
    // Handle form submission to add a new goal
    addGoalForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const goalName = addGoalForm.goalName.value.trim();
      const goalAmount = parseFloat(addGoalForm.goalAmount.value);
  
      if (goalName && goalAmount > 0) {
        // Generate a new unique ID for the goal (replace with proper ID generation logic)
        const id = goals.length > 0 ? goals[goals.length - 1].id + 1 : 1;
        const newGoal = {
          id,
          name: goalName,
          amount: goalAmount,
          saved: 0
        };
  
        goals.push(newGoal);
        renderGoals(); // Refresh goals list
        addGoalForm.reset(); // Clear form fields
      } else {
        alert('Please enter valid goal name and amount.');
      }
    });
  
    // Example functions for edit and delete actions (replace with actual logic)
    window.editGoal = function(id) {
      // Example: Redirect to edit page or show modal for editing
      alert(`Editing goal with ID ${id}`);
    }
  
    window.deleteGoal = function(id) {
      // Example: Confirm deletion and remove goal from list
      if (confirm(`Are you sure you want to delete goal with ID ${id}?`)) {
        goals = goals.filter(goal => goal.id !== id);
        renderGoals(); // Refresh goals list
      }
    }
  });
  
  
  