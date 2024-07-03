export function calculateInvestmentReturn(principal, rate, n, time) {
    return principal * Math.pow((1 + rate / n), n * time);
}