/**
# Task

Provide 3 unique implementations of the following function in TypeScript.

- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

//  Implementation a: Iterative approach using a for loop.
//  Complexity:
//  - Time Complexity: O(n) -  The loop iterates 'n' times.
//  - Space Complexity: O(1) -  Uses a constant amount of extra space, regardless of 'n'.
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Implementation b: Recursive approach.
// Complexity:
// - Time Complexity: O(n) -  Makes 'n' recursive calls.
// - Space Complexity: O(n) -  Due to the call stack growing with 'n' recursive calls.
function sum_to_n_b(n: number): number {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_b(n - 1);
  }
}

// Implementation c:  Mathematical formula approach.
// Complexity:
// - Time Complexity: O(1) -  Performs a constant number of arithmetic operations.
// - Space Complexity: O(1) -  Uses a constant amount of extra space.
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}
