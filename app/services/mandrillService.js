var mandrill = require('mandrill-api/mandrill'),
    mandrillKey = process.env.MANDRILL_KEY || 'yCQx5Z_aROV5m_bJ9zU6Ug',
    mandrill_client = new mandrill.Mandrill(mandrillKey),
    q = require('q');



//This sends the email


module.exports = {
    sendEmail: function(email){
        var deferred = q.defer();
        mandrill_client.messages.send(email, function(stuff){
           deferred.resolve(stuff);
        }, function(err){
           deferred.reject(err);
        });
        return deferred.promise;
    }
};