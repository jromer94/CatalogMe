var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['firstname', 'lastname', 'address1', 'address2', 'city', 'state', 'zipcode'], function (err, result) {

    console.log("worked");
    blairSignUp();
});

function blairSignUp(){
    var r = request.post(
        'https://www.blair.com/catalog/request_catalog_command.cmd',
         
        { form: { address1: 'Test', address2: '', city: "New Brunswick", company: '', emailAddress: '', emailFormat: 'html', firstName: 'Test', form_state: 'requestCatalogForm', lastName: "test", state: 'NJ', zipCode: '08901'}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );

}
