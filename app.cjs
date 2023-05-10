let express = require("express");
let cors = require("cors");
let { getStudentData } = require("./utils/getData.cjs");
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use(
  cors({
    origin: "https://results-indol.vercel.app", // Allow requests from this specific origin
    methods: "GET,POST", // Allow specified HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allow specified headers
    credentials: true, // Allow sending cookies along with the request (if applicable)
  })
);

app.get("/data/:id", async (req, res) => {
  let { id } = req.params;
  console.log("Checking");
  console.log("testing");
  console.log(id);
  let data1 = await getStudentData(2, 1, id);
  let data2 = await getStudentData(1, 2, id);
  res.json({
    "2-1": data1,
    "1-2": data2,
  });
});

app.listen(process.env.PORT || 4000);
