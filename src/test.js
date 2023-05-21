let arr = [];
let k = 1;
const key = (name) => {
  arr.push(name);
  k = k + 1;
  console.log(arr);
};

key("paul");
key("goat");
key("goate");
key("goati");
key("goatesh");
