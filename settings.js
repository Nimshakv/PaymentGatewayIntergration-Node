
module.exports = {
    port: 3000,
    env: 'development',

    development: {
        neteller: {
            userName: "AAABa5kn62evvPS9",
            secret: "0.0FJGLQVP_3fqFOHTGe5q3ftvzGQEHi3WdMZ9sGPRnR8.crDPU2rPtHD4IRiuIqwq8IGUTNU",
            authURL: "https://test.api.neteller.com/v1/oauth2/token?grant_type=client_credentials",
            ordersURL: "https://test.api.neteller.com/v1/orders"
        },
        cashu: {
            soapURL: "https://sandbox.cashu.com/secure/payment.wsdl",
            merchantId: "FXGate",
            encriptionKey: "tKu6T3NVzu6bgptv",
            serviceName: "MyService",
            postURL: "https://sandbox.cashu.com/cgi-bin/payment/pcashu.cgi",
            notificationSentBack: "https://sandbox.cashu.com/cgi-bin/notification/MerchantFeedBack.cgi"
        },
        sorex: {
            merchantAPIName: "fxgate-api",
            operation: "purchase_request",
            paymentSystem: "card_payin",
            merchantSignature: "nYNn2ePu2Ax9HXtIz4QMQIsXKo8EQ6BpnnhXNloS",
            postURL: "https://api.sorexpay.com",
            successURL: "http://6b664924.ngrok.io/sorex/success",
            failureURL: "http://6b664924.ngrok.io/sorex/failure",
            callbackURL: "http://6b664924.ngrok.io/sorex/callback"
        }
    },
    production: {
        neteller: {
            userName: "AAABa5P_T-dFpBJN",
            secret: "0.IqM2XG-2yQuckiPrv5nH6c6fS-ctpg0EnqgqYWzWTa8.EAAQqkK0UWjxlgI0nq1LWo0ag_5Bcsc",
            authURL: "https://api.neteller.com/v1/oauth2/token?grant_type=client_credentials",
            ordersURL: "https://api.neteller.com/v1/orders"
        },
        cashu: {
            soapURL: "https://secure.cashu.com/payment.wsdl",
            merchantId: "FXGate",
            encriptionKey: "tKu6T3NVzu6bgptv",
            serviceName: "FXGATE",
            postURL: "https://www.cashu.com/cgibin/payment/pcashu.cgi",
            notificationSentBack: "https://www.cashu.com/cgi-bin/notification/MerchantFeedBack.cgi"
        },
        sorex: {
            merchantAPIName: "fxgate-api",
            operation: "purchase_request",
            paymentSystem: "card_payin",
            merchantSignature: "nYNn2ePu2Ax9HXtIz4QMQIsXKo8EQ6BpnnhXNloS",
            postURL: "https://api.sorexpay.com",
            successURL: "https://my.fxgate.com/UserPanel/SorexPay/SorexPaySuccessPayment",
            failureURL: "https://my.fxgate.com/UserPanel/SorexPay/SorexPayCancelPayment",
            callbackURL: "https://my.fxgate.com/Success/SorexPay/Index"
        }
    }
}