// Check if profit is already stored in localStorage, else initialize it
let profit = localStorage.getItem('profit') ? parseFloat(localStorage.getItem('profit')) : 0;

// Handling spend money
const spendForm = document.getElementById('spend-form');
if (spendForm) {
    spendForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const amount = parseFloat(document.getElementById('amount').value);
        profit -= amount;
        localStorage.setItem('profit', profit);  // Save the updated profit in localStorage
        alert(`You spent $${amount} on ${item}. Total profit updated.`);
        window.location.href = 'index.html'; // Redirect back to home
    });
}

// Handling make money
const makeForm = document.getElementById('make-form');
if (makeForm) {
    makeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const source = document.getElementById('source').value;
        const income = parseFloat(document.getElementById('income').value);
        profit += income;
        localStorage.setItem('profit', profit);  // Save the updated profit in localStorage
        alert(`You earned $${income} from ${source}. Total profit updated.`);
        window.location.href = 'index.html'; // Redirect back to home
    });
}

// Displaying running profit
const profitDisplay = document.getElementById('profit-display');
if (profitDisplay) {
    const storedProfit = localStorage.getItem('profit');
    profitDisplay.textContent = storedProfit ? `$${storedProfit}` : '$0';
}
