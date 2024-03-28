import express from 'express'
import  {router} from './person/person.router.js'
import {coronaRouter} from  './corona/corona.router.js'
import cors from 'cors'
const app=express();
const port =3000;
const corsOptions = {
  origin:'*',
  Credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`);
});
app.use(router);
app.use(coronaRouter);
app.use(cors(corsOptions))