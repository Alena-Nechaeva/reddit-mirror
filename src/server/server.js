import express from "express";
import ReactDOM from "react-dom/server";
import {App} from "../shared/App.tsx";
import {indexTemplate} from "./indexTemplate";
import axios from "axios";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  const authorizationCode = req.query.code;
  const password = '1uU2TuG1CaIQepJR4nIQzk1TQQO1tQ';

  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password: password},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  )
    .then(({data}) => {
      res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']));
    })
    .catch(console.log)
});

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
