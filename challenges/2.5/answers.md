## Challenge: In your own words

  What is scope? Your explanation should include the idea of global vs. local scope.

Scope refers to the visibility of variables. Specifically what variables can be seen from a function inside the program. Variables declared outside of any function can be accessed by any function inside the program (global scope). Variables declared inside of a function can be accessed by it and any function inside of it (local scope). Local scope variables override those of parent scope.

  Why are global variables avoided?

Global variables can be unintentedly changed by functions other than the one running. So the result of a function is dependent on what other functions have run before it. This usually results in bugs.

  Explain JavaScript's strict mode

Strict mode results in an error anytime a variable is declared without the `var` keyword.

  What are side effects, and what is a pure function?

A side effect is when a function goes beyond its local scope and alters values on parent scope. A pure function is one without side effects and which will always return the same value provided with the same inputs (not dependent on global variables).

  Explain variable hoisting in JavaScript.

Hoisting refers to the variable interpretaion. The JS interpreter initially finds every variable declaration within a given scope moving it to the top.
