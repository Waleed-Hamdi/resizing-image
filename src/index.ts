
import express, { Request, Response, Express, NextFunction } from "express";
import new_api from "../Router/api/new_api";

// creating application object

const app = express();
const port = 8080;

// creating a server with port 8080

app.listen(port, () => {
  console.log(`hello this server is running on port ${port}`);
});

//first end point 
app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('home page');

}); 
 

//  api/image endpoint 
app.use(new_api);

export default app;
