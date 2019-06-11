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
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
