var ibmdb = require('ibm_db');
var Db2Store = require('connect-db2')(session);
var express = require('express');
var bodyParser = require('body-parser');

var options = {
    dsn: 'DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=pkq88236;PWD=j2shl+hchbp05t3x;'
};

var sessionStore = new Db2Store(options);
applicationCache.use(session({
    store: sessionStore,
    secret: 'keyboard cat'
}));

