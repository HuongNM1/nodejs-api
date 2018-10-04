const express = require('express');
const app = express();
const axios = require("axios");
const https = require('https');
const port = 3000;
app.get('/', (req, res) => {
    // axios.get("https://fundtrack2.vfm.com.vn/data/getsex", {
    //     headers: {
    //         username: 'Vfm',
    //         password: 'Vfm@123'
    //     },
    //     strictSSL: false
    // }).then(function (response) {
    //     console.log('hello', response);
    //     if (response.statusCode == 200) {
    //         res.json(response);
    //     }
    // }).catch(e => {
    //     console.log('err: ', e);
    // });

    axios({
        url: "https://fundtrack2.vfm.com.vn/data/getsex",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            username: 'Vfm',
            password: 'Vfm@123'
        },
        responseType: 'json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
});


app.listen(port, () => { console.log(`Listen to port: ${port}!`) })