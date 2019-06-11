/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
const express = require('express');
const os = require('os');
const request = require('request');

const app = express();
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html'));

app.use(express.static('dist'));
// Function to reformat JSON object into new JSON Object that contains arrays of up to 5 jobs each.
// function reformatData(data) {
//   let newObject = [];
//   if (data) {
//     data = JSON.parse(data);
//     let count = 0;
//     let arrayBlock = [];
//     for (let i = 0; i < data.jobs.length; i++) {
//       if (count <= 4) {
//         arrayBlock.push(data.jobs[i]);
//         if (i === data.jobs.length - 1) {
//           newObject.push(arrayBlock);
//         }
//       } else {
//         newObject.push(arrayBlock);
//         count = 0;
//         arrayBlock = [];
//         arrayBlock.push(data.jobs[i]);
//       }
//       count++;
//     }
//     return newObject;
//   }
//   return null;
// }

// app.get('/api/getAllJobPostings', (req, res) => {
//   const departmentIDs = ['55058', '9253', '24218', '9256', '21654'];
//   request.get('https://boards-api.greenhouse.io/v1/boards/kivaorg/departments',
//     (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         console.log(body)

//         const data = reformatData(body);
//         res.send(data);
//       } else {
//         console.log(error, 'error');

//         return error;
//       }
//     });
// });


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
