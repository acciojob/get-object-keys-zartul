//your JS code here. If required.
const student = {
  name: "John",
	age:25,
	city:"New York",
};
// const keys = getKeys(myObj);
function getKeys(obj) {
  return Object.keys(obj);
}
const keys = getKeys(myObj);
window.student = student;
window.getKeys = getKeys;