let express = require("express");
let cors = require("cors");
let { getStudentData } = require("./utils/getData.cjs");
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/data/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let data1 = await getStudentData(2, 1, id);
  let data2 = await getStudentData(1, 2, id);
  res.json({
    "2-1": data1,
    "1-2": data2,
  });
});

app.listen(process.env.PORT || 4000);
