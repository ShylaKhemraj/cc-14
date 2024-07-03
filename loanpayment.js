export function calculateLoanpayment(principal, rate, n) {
    let rate = rate / 12;
    return principal * (rate * Math.pow((1+rate), n)) / (math.pow((1+rate), n)-1)
}