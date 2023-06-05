const express = require('express');
var cluster = require('cluster');
var bodyParser = require('body-parser');

const {authorize,redirect} = require('./shopifyOAuthHelper');

require('dotenv').config();

var port = 4000;

process.env.NODE_NO_WARNINGS = 1;

var cCPUs = 1;


    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json());
    app.listen(port);
    app.get('/api/shopify/authorize', async (req,res) => {
        return res.redirect(await authorize(req.query.shop));
    });

    app.get('/api/shopify/redirect', async (req,res) => {
        return res.json(await redirect(req.query.code));
    });
