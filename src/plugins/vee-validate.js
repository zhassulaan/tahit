import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

let lang = "Ru";

if (document.cookie) {
  lang = document.cookie.split("lang=")[1];
  if (lang) {
    lang = lang.split(";")[0];
  }
}

// No message specified.f
extend("email", { ...email, message: "email" });

console.log(lang, "language");

let requiredTemp = lang === "Ru" ? "Заполните поле" : "Fill in the field";
let passTemp =
  lang === "Ru"
    ? "Пароль должен содержать 5 символов"
    : "Password must contain 5 characters";

let phoneTemp = lang === "Ru" ? "Введите номер телефона" : "Enter phone number";
let emailTemp =
  lang === "Ru" ? "E-mail введен неправильно" : "Email entered incorrectly";
let minTemp =
  lang === "Ru" ? "Введите более 4 цифр" : "Please enter more than 4 digits";

// Override the default message.
extend("required", {
  ...required,
  message: requiredTemp,
});

extend("password", (value) => {
  if (value.length >= 5) {
    return true;
  }
  return passTemp;
});

extend("phone_number", (value) => {
  let matches = value;

  matches = matches.replace("+7", "8");
  matches = matches.replace(/\D/g, "");

  if (matches.length >= 11) {
    return true;
  }

  return phoneTemp;
});

extend("email", {
  ...email,
  message: emailTemp,
});

// extend("price", value => {
//   if (value.length >=1) {
//     return true;
//   }
//   return 'Введите цену';
// });

extend("min", (value) => {
  if (value.length >= 5) {
    return true;
  }
  return minTemp;
});
