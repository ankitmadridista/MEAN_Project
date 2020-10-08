const express = require("express");
const cors = require("cors");

const dbaddUser = require("./db.addUser");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;
    //console.log(input);
    await dbaddUser.addUser(input);
    res.json({ message: "Successfully data inserted" });
  } catch (err) {
    res.json({ message: "failed !!!" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;
    //console.log(input);
    await dbaddUser.authUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/showmenu", async (req, res) => {
  try {
    //console.log('inside show menu');
    const input = req.body;
    //console.log(input);
    const result = await dbaddUser.showMenu(input);
    res.json(result);
    //console.log(result);
  } catch (err) {
    const json = { message: "Failure" };
    res.json(json);
  }
});

app.get("/showusers", async (req, res) => {
  try {
    // lets read the query parameter
    //const input = req.query;
    //console.log("inside show users");
    // calling db logic :: async :: non blocking
    let results = await dbaddUser.showUsers();
    //console.log(results);

    res.json(results);
  } catch (err) {
    res.json({ message: "failure" });
  }
});

app.post("/del", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.body;
    console.log("inside del users");
    console.log(input);
    // calling db logic :: async :: non blocking
    await dbaddUser.delUsers(input);

    res.json({ opr: "true" });
  } catch (err) {
    res.json({ opr: "false" });
  }
});

app.get("/showadminmenu", async (req, res) => {
  try {
    // lets read the query parameter
    //const input = req.query;
    //console.log("inside show users");
    // calling db logic :: async :: non blocking
    let results = await dbaddUser.showAdminMenu();
    console.log(results);

    res.json(results);
  } catch (err) {
    res.json({ message: "failure" });
  }
});

app.post("/updatebill", async (req, res) => {
  try {
    const input = req.body;
    //console.log(input);
    await dbaddUser.updateBill(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.post("/getaccdet", async (req, res) => {
  try {
    //console.log("inside getacc det");
    const input = req.body;
    //console.log(input);
    const result = await dbaddUser.getAccDet(input);
    res.json(result);
    console.log(result);
  } catch (err) {
    const json = { message: "Failure" };
    res.json(json);
  }
});

app.post("/emailver", async (req, res) => {
  try {
    //console.log("inside email ver post call");
    const input = req.body;
    console.log(input);
    const result = await dbaddUser.emailVer(input);
    //console.log(result);
    res.json({ msg: true });
  } catch (err) {
    res.json({ msg: false });
  }
});

app.post("/updatepassword", async (req, res) => {
  try {
    const input = req.body;
    //console.log("in update pwd");
    console.log(input);
    await dbaddUser.updatePassword(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false });
  }
});

app.listen(3500);
