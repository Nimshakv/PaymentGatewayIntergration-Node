'use strict';
const crypto = require('crypto');
const request = require('request');
const btoa = require('btoa');
const atob = require('atob');
const settings = require('../settings.js');
const parseString = require('xml2js').parseString;

module.exports = {
    pay: function(req, res) {

        const merchant_api_name = settings[settings.env].sorex.merchantAPIName;
        const operation = settings[settings.env].sorex.operation;
        const payment_system = settings[settings.env].sorex.paymentSystem;
        const success_url = settings[settings.env].sorex.successURL;
        const failure_url = settings[settings.env].sorex.failureURL;
        const callback_url = settings[settings.env].sorex.callbackURL;
        const merchantSignature = settings[settings.env].sorex.merchantSignature;
        const deny = false;

        let b64Param = btoa(unescape(`<request>
                                    <version>1.0</version>
                                    <merchant_api_name>${merchant_api_name}</merchant_api_name>
                                    <operation>${operation}</operation>
                                    <params>
                                        <sum>${req.body.amount}</sum>
                                        <currency>${req.body.curreny}</currency>
                                        <payment_system>${payment_system}</payment_system>
                                        <merchant_order_id>${req.body.merchantId}</merchant_order_id>
                                        <deny_duplicate_merchant_order_id>${deny}</deny_duplicate_merchant_order_id>
                                        <merchant_client_id>${req.body.clientId}</merchant_client_id>
                                        <merchant_client_country>${req.body.country}</merchant_client_country>
                                        <merchant_client_city>${req.body.city}</merchant_client_city>
                                        <merchant_client_name>${req.body.clientName}</merchant_client_name>
                                        <merchant_client_email>${req.body.email}</merchant_client_email>
                                        <merchant_client_regdate>${req.body.regDate}</merchant_client_regdate>
                                        <merchant_comment>${req.body.note}</merchant_comment>
                                        <merchant_url_success>${success_url}</merchant_url_success>
                                        <merchant_url_failure>${failure_url}</merchant_url_failure>
                                        <merchant_url_callback>${callback_url}</merchant_url_callback>
                                    </params>
                                </request>`));
        
        const shaValue = crypto.createHash('sha1')
                               .update(merchantSignature + b64Param + merchantSignature)
                               .digest('hex').toLowerCase();

        const param = {
            request: b64Param,
            signature: shaValue
        }

        request({
            url: settings[settings.env].sorex.postURL,
            formData: param,
            method: 'POST'
        }, function(err, response, body) {
            if (err) throw new Error(err);
            
            let resp = atob(body);
            parseString(resp, function (err, result) {
                if(err){
                    res.status(500).json(err.message)
                }
                else{
                    const url = result.response.data[0].url[0];
                    res.status(200).json({"url": url})
                }
            });
        });
    }
};