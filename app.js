const express = require('express');
const morgan = require("morgan");
const {createProxyMiddleware} = require('http-proxy-middleware');
require('dotenv').config()

// Creating express server
const app = express();