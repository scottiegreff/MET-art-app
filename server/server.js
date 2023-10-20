import express from "express";
import { readFile } from "fs";
import { join } from "path";
const app = express();



// app.get("/data", (req, res) => {

//   const jsonFilePath = join(__dirname + "server/log/artists.json");
  

//   readFile(jsonFilePath, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error retrieving data");
//     }

//     try {
//       const jsonData = JSON.parse(data);
//       res.status(200).json(jsonData);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error parsing JSON");
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log(`Server running on port ${3000}`);
// });
