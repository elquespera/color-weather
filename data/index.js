const fs = require("fs");

const countries = require("./countries-all.json");
const languages = ["en", "ru", "es", "cs", "de"];

const filtered = countries.map((country) => {
  const result = { code: country.alpha2 };
  languages.forEach((language) => {
    if (country[language]) result[language] = country[language];
  });
  return result;
});

fs.writeFileSync(
  "../assets/countries/countries.json",
  JSON.stringify(filtered)
);
