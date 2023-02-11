import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;
dotenv.config()

const apiUrl = process.env.API_URL;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script type="text/javascript">
        localStorage.setItem('apiUrl' , "${apiUrl}");
        window.location.href = "/";
    </script>
</body>
</html>
`


app.use(express.static("public"));

app.get("/api" , (req: Request , res: Response) => {
    res.send();
})

app.get("/api/users", (req: Request , res: Response) => {
    res.send({name: "Thurein" , email : "thurein@gmail.com"});
});

app.listen(3000 , () => {
    console.log("Server listened at port 3000....")
})