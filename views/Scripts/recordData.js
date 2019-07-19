var ibmdb = require('ibm_db');
console.log("Test program to access DB2 sample database");
/*Connect to the database server
param 1: The DSN string which has the details of database name to connect to, user id, password, hostname, portnumber 
param 2: The Callback function to execute when connection attempt to the specified database is completed
*/
ibmdb.open("DRIVER={DB2}; DATABASE=sample; UID=pkq88236; PWD=j2shl+hchbp05t3x; HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net; port=50000", function (err, conn) {
    if (err) {
        /*
        On error in connection, log the error message on console 
        */
        console.error("error: ", err.message);
    }
    else {
        conn.query("INSERT INTO scout(lastname) VALUES ('souza')", function (err, result) {
            if (err) throw err;
            console.log("it is working");
        });
    }
});