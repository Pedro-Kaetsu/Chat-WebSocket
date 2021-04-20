import express, { response } from "express";
import { request } from "node:http";

const app = express();

/**
 * GET => Search`s
 * POST => Create
 * PUT => Modifications
 * DELETE => Deletes
 * PATCH => Modify specific info
 */

app.get("/", (request, response) => {
  return response.json({ message: "Hi, NLW 05"});
});

app.post("/", (request, response) => {
  return response.json({ message: "User salved with success!"});
})

app.listen(3333, () => console.log("Server is running in port 3333"));
