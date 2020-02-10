'use strict';
const sorex = require('../src/sorex');

module.exports = function(app){
    app.route('/sorex').post(sorex.pay);
}