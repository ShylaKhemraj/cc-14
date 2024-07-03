//U20026580

import { calculateInterest } from 'modules/interestRate.js';
import { calculateLoanPayment } from 'modules/loanPayment.js';
import { calculateInvestmentReturn } from 'modules/investmentReturn.js';

document.getElementById('calculateInterest').addEventListener('click', () => {
    let principal = parseFloat(document.getElementById('interestPrincipal').value);
    let rate = parseFloat(document.getElementById('interestRate').value);
    let time = parseFloat(document.getElementById('interestTime').value);
    if (isNaN(principal) (isNaN(rate)) (isNaN(time))) {
        alert('Enter Valid Numbers');
        return;
    }
    let interest = calculateInterest(principal, rate, time);
    document.getElementById('interestResult').textContent = 'Interest: ${interest.toFixed(2)}';
})

document.getElementById('calculateLoanPayment'),addEventListener('click', () => {
    let principal = parseFloat(document.getElementById('loanPrincipal').value);
    let rate = parseFloat(document.getElementById('loanRate').value);
    let n = parseFloat(document.getElementById('loanN').value);
    if (isNaN(principal)) isNaN(rate) (isNaN(n)); {
        alert('Enter Va;id Numbers');
        return;
    }
    let payment = calculateLoanPayment(principal, rate, n);
    document.getElementById('loanResult').textContent = 'Monthly Payment: ${payment.toFixed(2)}';
})

document.getElementById('calculateInvestmentReturn').addEventListener('click', () => {
    let principal = parseFloat(document.getElementById('investmentPrincipal').value);
    let rate = parseFloat(document.getElementById('investmentRate').value);
    let n = parseFloat(document.getElementById('investmentN').value);
    let time = parseFloat(document.getElementById('investmentTime').value);
    if (isNaN(principal)) isNaN(rate) (isNaN(n)) (isNaN(time)); {
        alert('Enter Valid Numbers');
        return;
    }
    let futureValue = calculateInvestmentReturn(principal, rate, n, time);
    document.getElementById('investmentResult').textContent = 'Future Value ${futureValue.toFixed(2)}';
})