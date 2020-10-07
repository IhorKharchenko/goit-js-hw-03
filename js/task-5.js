function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const spam = ["spam", "sale"];
  str = str.toLowerCase();
  for (const spamWord of spam) {
    if (str.includes(spamWord)) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
