console.log("===========================");
// =========================================

let user = {
  name: `John`,
  surname: `Smith`,
};
(user.name = `Pete`), console.log(user);

console.log("===========================");
// ==========================================

let user1 = {
  name: `John`,
  surname: `Smith`,
};
(user.name = `Pete`), delete user1.name;

console.log(user1);

console.log("===========================");
// =============================================

let schedule = {};
let c = Object.keys(schedule).length === 0 ? true : false;
console.log("c =", c);

console.log("===========================");
// ============================================

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let allsal = 0;

for (let qiymat in salaries) {
  allsal += salaries[qiymat];
}
console.log(allsal);

console.log("===========================");
// =========================================

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiply(obj) {
  for (let key in obj) {
    if (typeof obj[key] === `number`) {
      obj[key] *= 2;
    }
  }
}

multiply(menu);
console.log(menu);

console.log("===========================");
// ======================================