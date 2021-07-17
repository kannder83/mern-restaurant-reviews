//Conect de DB and star server.

import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  });

// No son valores validos para connect URI{
//   poolSize: 50,
//   wtimeout: 2500,
//   useNewUrlParse: true,
// }
