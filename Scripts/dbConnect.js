const http = require('http');
const mysql = require('mysql');

// Create connection to database
const pool = mysql.createPool({
    host: 'team6217.database.windows.net',
    user: 'frc6217',
    password: 'Cfbombers6217',
    database: 'ScoutApp',
});

var reo = '<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';

function setResHtml(sql, cb) {
    pool.getConnection((err, con) => {
        if(err) {
            console.error(err.message);
            console.log("Here One");
        }
        else {
            con.query(sql, (err, res, cols) => {
                if (err) {
                    console.error(err.message);
                    console.log("Here Two");
                }
                else {
                    var table = '';

                    for (var i = 0; i < res.length; i++) {
                        table += '<tr><td>' + res[i].matchReportUrl + '</td><td>' + res[i].r1TeamNumber + '</td><td>' + res[i].r1TeamReportUrl + '</td><td>' + res[i].r1TeamScoutUrl + '</td><td>' + res[i].r2TeamNumber + '</td><td>' + res[i].r2TeamReportUrl + '</td><td>' + res[i].r2TeamScoutUrl + '</td><td>' + res[i].r3TeamNumber + '</td><td>' + res[i].r3TeamReportUrl + '</td><td>' + res[i].r3TeamScoutUrl + '</td><td>' + res[i].b1TeamNumber + '</td><td>' + res[i].b1TeamReportUrl + '</td><td>' + res[i].b1TeamAcoutUrl + '</td><td>' + res[i].b2TeamNumber + '</td><td>' + res[i].b2TeamScoutUrl + '</td><td>' + res[i].b3TeamNumber + '</td><td>' + res[i].b3TeamReportUrl + '</td><td>' + res[i].b3TeamScoutUrl + '</td></tr>';
                    }
                    table = '<table border="1"><tr><th>Match </th><th>Time</th><th>Red 1</th><th>S</th><th>Red 2</th><th>S</th><th>Red 3</th><th>S</th><th>Blu 1</th><th>S</th><th>Blu 2</th><th>S</th><th>Blu 3</th><th>S</th><th>Red Sc</th><th>Blu Sc</th></tr>' + table + '</table>';

                    con.release();

                    return cb(table);
                }
            });
        }  
    });
}

let sql = 'select matchReportUrl, r1TeamNumber, r1TeamReportUrl, r1TeamScoutUrl, r2TeamNumber, r2TeamReportUrl, r2TeamScoutUrl, r3TeamNumber, r3TeamReportUrl, r3TeamScoutUrl, b1TeamNumber, b1TeamReportUrl, b1TeamScoutUrl, b2TeamNumber, b2TeamReportUrl, b2TeamScoutUrl, b3TeamNumber, b3TeamReportUrl, b3TeamScoutUrl, sortOrder, matchNumber, matchId, datetime, redScore, blueScore, r1TeamId, r2TeamId, r3TeamId, b1TeamId, b2TeamId, b3TeamId from v_MatchHyperlinks order by sortOrder, datetime, matchNumber';
/*
//create the server for browser access
const server = http.createServer((req, res) => {
    setResHtml(sql, resql => {
        reo = reo.replace('{${table}}', resql);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(reo, 'utf-8');
        res.end();
    });
});

server.listen(8080, () => {
    console.log('Server running at //localhost:8080/');
});
*/