const accountId = 1234; // 'const' is used to declare a constant , it cannot be changed
let accountName = "Mayank"; // 'let' is used to declare a variable , it can be reassigned(update value) but not redeclared(again declare using let)
var accountPassword = "12345"; // 'var' is like let, but it can be redeclared , "PLZZ DON'T USE IT"
accountCity = "Mumbai"; // this is also valid
let accountState; // variables can be declared without assigning any value

console.log(accountId, accountName, accountPassword, accountCity, accountState); // linear output
console.table([
  accountId,
  accountName,
  accountPassword,
  accountCity,
  accountState,
]); // table output