let fs = require("fs").promises;
let path = require("path");

let getBranch = {
  "04": "ece",
  "05": "cse",
  42: "csm",
  44: "csd",
};
async function getData(year, sem, branch) {
  let file = path.join("data", `${year}-${sem}`, `${branch}`, `students.json`);
  let data = await fs.readFile(file, "utf-8");
  return JSON.parse(data);
}

async function getStudentData(year, sem, id) {
  let branchId = id.substring(6, 8);
  let branch = getBranch[branchId];
  // console.log(branch, branchId);
  let data = await getData(year, sem, branch);
  for (obj of data) {
    if (obj.regId === id) {
      // console.log(obj);
      return obj;
    }
  }
  return { mssg: "InvalidRegId" };
}
// getStudentData(1, 2, "21U41A0546");

module.exports = {
  getStudentData,
};
