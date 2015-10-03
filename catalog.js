var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['firstname', 'lastname', 'address1', 'address2', 'city', 'state', 'zipcode'], function (err, result) {

    oldiesSignUp();
});

function blairSignUp(){
    var r = request.post(
        'https://www.blair.com/catalog/request_catalog_command.cmd',
         
        { form: { address1: 'Test',
                  address2: '',
                  city: "New Brunswick",
                  company: '',
                  emailAddress: '',
                  emailFormat: 'html',
                  firstName: 'Test',
                  form_state: 'requestCatalogForm',
                  lastName: "test",
                  state: 'NJ',
                  zipCode: '08901'}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );

}

function monroeSignUp(){
    var r = request.post(
        'https://www.monroeandmain.com/catalog/request_catalog.cmd',
         
        { form: { address1: '12 high street',
                  address2: '',
                  addressValidation: 'true',
                  catalog: 'W',
                  city: "New Brunswick",
                  countryCode: 'US',
                  emailAddress: '',
                  firstName: 'John',
                  form_state: 'requestCatalogForm',
                  lastName: "test",
                  needPhoneValidation: 'false',
                  phone: '',
                  state: 'NJ',
                  title: '',
                  validateZipCode: 'Y',
                  x: '0',
                  y: '0',
                  zipCode: '08901'}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );}

//probably works
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

function oldiesSignUp() {
    var r = request.post(
        'http://www.oldies.com/catalog-request/',
         //capitalize city
        { form: { address: '0',
                  address1: '32 HIGH STREET', 
                  address2: '', 
                  catalog: 'movie,cd,book,45,gift', 
		  city: "NEW BRUNSWICK", 
                  fullname: 'John Ryan', 
                  fuseaction: 'CatalogRequest.Save', 
                  int: 'false',
                  referrer: '',
                  state: 'NJ', 
                  verify: 'true',
                  zip: '08901'},
          followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );
}
