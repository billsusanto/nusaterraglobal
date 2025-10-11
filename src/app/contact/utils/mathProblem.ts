/**
 * Generates a random math problem for human verification.
 * Problems are simple addition or subtraction with single-digit numbers.
 */
export function randomMathProblem() {
  // Generate random numbers between 1 and 9
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;

  // Choose operation (0 for addition, 1 for subtraction)
  const operation = Math.round(Math.random());

  if (operation === 0) {
    // Addition
    return {
      problem: `${num1} + ${num2}`,
      answer: num1 + num2,
    };
  } else {
    // For subtraction, ensure result is positive by using the larger number first
    const larger = Math.max(num1, num2);
    const smaller = Math.min(num1, num2);

    return {
      problem: `${larger} - ${smaller}`,
      answer: larger - smaller,
    };
  }
}
