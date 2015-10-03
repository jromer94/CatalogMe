var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['firstname', 'lastname', 'address1', 'address2', 'city', 'state', 'zip', 'phone'], function (err, result) {
    console.log(result);

    //blairSignUp(result)
    //monroeSignUp(result)
    //ginnysSignUp(result)
    //momaSignUp(result)
    //oldiesSignUp(result)
});

function blairSignUp(result){
    var r = request.post(
        'https://www.blair.com/catalog/request_catalog_command.cmd',
         
        { form: { address1: result['address1'],
                  address2: result['address2'],
                  city: result['city'],
                  company: '',
                  emailAddress: '',
                  emailFormat: 'html',
                  firstName: result['firstname'], 
                  form_state: 'requestCatalogForm',
                  lastName: result['lastname'],
                  state: result['state'],
                  zipCode: result['zip']}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );

}

function monroeSignUp(result){
    var r = request.post(
        'https://www.monroeandmain.com/catalog/request_catalog.cmd',
         
        { form: { address1: result['address1'],
                  address2: result['address2'],
                  addressValidation: 'true',
                  catalog: 'W',
                  city: result['city'],
                  countryCode: 'US',
                  emailAddress: '',
                  firstName: result['firstname'],
                  form_state: 'requestCatalogForm',
                  lastName: result['lastname'],
                  needPhoneValidation: 'false',
                  phone: '',
                  state: result['state'],
                  title: '',
                  validateZipCode: 'Y',
                  x: '0',
                  y: '0',
                  zipCode: result['zip']}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );}

//same as monroe just diff cat
function ginnysSignUp(result){
    var r = request.post(
        'https://www.ginnys.com/catalog/request_catalog.cmd',
         
        { form: { address1: result['address1'],
                  address2: result['address2'],
                  addressValidation: 'true',
                  catalog: 'W',
                  city: result['city'],
                  countryCode: 'US',
                  emailAddress: '',
                  firstName: result['firstname'],
                  form_state: 'requestCatalogForm',
                  lastName: result['lastname'],
                  needPhoneValidation: 'false',
                  phone: '',
                  state: result['state'],
                  title: '',
                  validateZipCode: 'Y',
                  x: '0',
                  y: '0',
                  zipCode: result['zip']}, followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );}

//probably works
function momaSignUp(result) {
    var r = request.post(
        'http://www.momastore.org/webapp/wcs/stores/servlet/AjaxRequestCatalogCmd',
         
        { form: { address1: result['address1'], 
                  address2: result['address2'], 
                  catalogId: '10451', 
		  city: result['city'], 
                  country: 'US',
                  email: '', 
                  firstName: result['firstname'], 
		  langId: '-1',
                  lastName: result['lastname'], 
                  origin: '5D',
                  requesttype: 'ajax',
                  state: result['state'], 
                  storeId: '10001',
                  successURL: 'MoMARequestCatalogSuccessView',
                  zip: result['zipcode']},
          followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );
}

function oldiesSignUp(result) {
    var r = request.post(
        'http://www.oldies.com/catalog-request/',
         //capitalize city
        { form: { address: '0',
                  address1: result['address1'], 
                  address2: result['address2'], 
                  catalog: 'movie,cd,book,45,gift', 
		  city: result[city], 
                  fullname: result[firstname] + " " + result[lastname], 
                  fuseaction: 'CatalogRequest.Save', 
                  int: 'false',
                  referrer: '',
                  state: result[state], 
                  verify: 'true',
                  zip: result['zip']},
          followAllRedirects: true}, 
        function (error, response, body) {
            console.log(response.request.uri);
        }
    );
}
