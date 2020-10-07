function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  if (login.length < min || login.length > max) {
    return false;
  }
  return true;
}

function isLoginUnique(logins, login) {
  "use strict";
  // Write code under this line
  if (logins.includes(login)) {
    return false;
  }
  return true;
}

function addLogin(logins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(logins, login) === false) {
    message = REFUSAL;
  }
  if (isLoginValid(login) === true && isLoginUnique(logins, login) === true) {
    message = SUCCESS;
    logins.push(login);
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
