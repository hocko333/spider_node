const express = require("express");
const fs = require("fs");
const expressTPL = require("express-art-template");

const app = express();
app.set("view engine", "html");
app.engine("html", expressTPL);

app.get("/", (req, res) => {
  fs.readFile('./data/result1.json', 'utf-8', (err, data) => {
    if (err) {
      res.send('获取失败嗷')
    } else {
      try {
        app.locals.dataList = JSON.parse(data)
      } catch (error) {
        console.log('解析数据失败!')
      }
      res.render("index");
    }
  })
});

// app.get('/data', (req, res) => {
//   fs.readFile('./data/result1.json', 'utf-8', (err, data) => {
//     if (err) {
//       res.send({
//         code: 0,
//         msg: 'error'
//       })
//     } else {
//       res.send({
//         code: 1,
//         data
//       })
//     }
//   })
// })

app.use(express.static("assets"));
app.listen(3000, () => console.log("Running at port：3000"));
