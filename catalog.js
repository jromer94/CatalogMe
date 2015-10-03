var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['firstname', 'lastname', 'address1', 'address2', 'city', 'state', 'zipcode'], function (err, result) {

    console.log("worked");
    //blairSignUp();
    momaSignUp();
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

//TODO
function monroeSignUp(){
    var r = request.post(
        'https://www.monroeandmain.com/catalog/request_catalog.cmd',
         
        { form: { address1: 'Test', address2: '', city: "New Brunswick", company: '', emailAddress: '', emailFormat: 'html', firstName: 'Test', form_state: 'requestCatalogForm', lastName: "test", state: 'NJ', zipCode: '08901'}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );

}

//Doesnt work
function strombergsSignUp() {
    var r = request.post(
        'https://www.strombergschickens.com/index.php',
         
        { form: { address1: '32 High Street', 
                  address2: '', 
		  city: "New Brunswick", 
                  company: '', 
                  email: 'info@strombergschickens.com', 
                  firstName: 'John', 
                  lastName: "Ryan", 
                  state: 'NJ', 
                  zip: '08901', 
                  action: 'CatalogRequest', 
                  category: 'Catalog', 
                  country: 'United States',
                  hear: 'Google', 
                  title: '',
                  phone:'6097843232', 
                  req_company: 'n', 
                  req_title: 'n', 
                  submit: 'Request Catalog'}, 
          followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );
}

function momaSignUp() {
    var r = request.post(
        'http://www.momastore.org/webapp/wcs/stores/servlet/AjaxRequestCatalogCmd',
         
        { form: { address1: '32 High Street', 
                  address2: '', 
                  catalogId: '10451', 
		  city: "New Brunswick", 
                  country: 'US',
                  email: '', 
                  firstName: 'John', 
		  langId: '-1',
                  lastName: "Ryan", 
                  origin: '5D',
                  requesttype: 'ajax',
                  state: 'NJ', 
                  storeId: '10001',
                  successURL: 'MoMARequestCatalogSuccessView',
                  zip: '08901'},
          followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );
}
