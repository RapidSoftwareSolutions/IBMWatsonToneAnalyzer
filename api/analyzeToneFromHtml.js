const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        username,
        password,
        version='2016-05-19',
        html,
        tones,
        sentences
    } = req.body.args;
        
    let required = lib.parseReq({username, password, html});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let qs = lib.clearArgs({
        version,
        tones,
        sentences
    });

    request({
        qs,
        headers: {
            'Content-Type': 'text/html'
        },
        auth: {username, password},
        uri: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone',
        method: 'POST',
        json: {text: html}
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    })

    return defered.promise;
}