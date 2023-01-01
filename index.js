require("dotenv").config();
// const mainRouter = require("./config/mainRoutes")
const express = require("express")
const cors = require("cors");
const app = express();





app.use(cors());
app.use(express.json());

require("./DL/db").connect()

app.use("/api/product", require("./Routes/productRoute"))
app.use("/api/user", require("./Routes/userRoute"))


// require("./ROUTERS/userRouter")
let port = process.env.PORT || 5000;

app.listen(port, () =>
    console.log(`Server is running at Port ${port}`));
