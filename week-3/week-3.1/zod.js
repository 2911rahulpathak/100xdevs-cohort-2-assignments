const express = require("express");
const zod = require("zod");
const app = express();

//schema
const schema = zod.object({
  email: zod.string().email(), //chain along .email()
  password: zod.string().min(8), //.min(8) zod provides
  country: zod.literal("IN").or(zod.literal("US")),
});
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);

/*  
const express = require("express");
const zod = require("zod");
const app = express();

//schema
const schema = zod.array(zod.number());
app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);


*/
