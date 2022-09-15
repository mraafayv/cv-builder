// const express = require('express');
// // const app = express();
// const mysql = require('mysql');


// app.listen(5500, () => {
//     console.log("listening on port 5500");
//   })
  

// //DataBase Connection
// // const db = mysql.createConnection({
// //     host: '127.0.0.5500',
// //     user: 'root',
// //     password: 'root',
// //     database: 'cv-builder',
// //     multipleStatements: true
// //   });
  
// //   db.connect((err) => {
// //     if (err) {
// //       throw err;
// //     }
// //     console.log("DB Connected Successfully");
// //   });

firebase.database().ref().on("value", (snapshot)=>{
    document.querySelector("#data").innerHTML = "Valuw from database: "+snapshot.value;
})

