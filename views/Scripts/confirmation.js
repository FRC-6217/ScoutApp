var ibmdb = require('ibm_db');
var express = require('express');

ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50001;PROTOCOL=TCPIP", function (err, conn) {
    if (err) return console.log(err);

    var sql = 'INSERT INTO scout'
                    
    //write the code here;
    conn.close(function () {
        console.log('done');
    })
})