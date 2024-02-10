const express = require("express");
const app = express();
const mongoose = require("mongoose")

const cors = require("cors");
const port = "3001";
const salesRoutes = require("./routes/orders")
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
const db = "mongodb+srv://dario:khLRzHpkEiaUY5tF@cluster0.knrevxp.mongodb.net/?retryWrites=true&w=majority"
app.use("/orders", salesRoutes)

mongoose.connect(db)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

