const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2) + " MB";
    const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2) + " MB";
    const cpu = os.cpus()[0].model;
    const userInfo = os.userInfo().username;

    res.send(`
        <html>
        <head>
            <title>Work with OS</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 50px;
                }
                .box {
                    border: 2px solid black;
                    padding: 30px;
                    width: 400px;
                    margin: auto;
                }
                button {
                    padding: 10px 20px;
                    margin: 10px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h2>Work with OS</h2>
                <button onclick="alert('Free Memory: ${freeMemory}')">Free Memory</button>
                <button onclick="alert('Total Memory: ${totalMemory}')">Total Memory</button>
                <br/>
                <button onclick="alert('CPU: ${cpu}')">CPU Info</button>
                <button onclick="alert('User: ${userInfo}')">User Info</button>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
