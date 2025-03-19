//your JS code here. If required.
const student = {
  name: "John",
};
// const keys = getKeys(myObj);
function getKeys(obj) {
  return Object.keys(obj);
}
const keys = getKeys(obj);
window.student = student;
window.getKeys = getKeys;