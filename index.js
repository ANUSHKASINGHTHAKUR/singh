const express = require("express");
const app = express();

//route ->
//CRUD operation -> create,retrieve ,update,delete


//methods :-> post,get,put,delete

app.get('/', (req, res) => {

    res.send("hello ji kaise ho aapp!")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

    console.log(server is running at ${ PORT });
});

