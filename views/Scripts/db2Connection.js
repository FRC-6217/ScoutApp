var ibmdb = require('ibm_db');

ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=pkq88236;PWD=j2shl+hchbp05t3x;", function (err, conn) {
    if (err) return console.log(err);
    //need to change this chunk of code;
    conn.query("INSERT INTO scout (lastname) VALUES ('please')", function (err, data) {
        if (err) console.log(err);

        else console.log(data);
        conn.close(function () {
            console.log('done');
        });
    });
});