// const customers = [
// {"id":1,"email":"isidro_von@hotmail.com","first":"Torrey","last":"Veum","company":"Google","created_at":"2014-12-25T04:06:27.981Z","country":"Switzerland"},
// {"id":2,"email":"frederique19@gmail.com","first":"Micah","last":"Sanford","company":"Google","created_at":"2014-07-03T16:08:17.044Z","country":"Democratic People's Republic of Korea"},
// {"id":3,"email":"fredy54@gmail.com","first":"Hollis","last":"Swift","company":"Microsoft","created_at":"2014-08-18T06:15:16.731Z","country":"Tunisia"},
// {"id":4,"email":"braxton29@hotmail.com","first":"Perry","last":"Leffler","company":"Microsoft","created_at":"2014-07-10T11:31:40.235Z","country":"Chad"},
// {"id":5,"email":"turner59@gmail.com","first":"Janelle","last":"Hagenes","company":"Amazon","created_at":"2014-04-21T15:05:43.229Z","country":"Swaziland"},
// {"id":6,"email":"halie47@yahoo.com","first":"Charity","last":"Bradtke","company":"Google","created_at":"2014-09-21T21:59:18.892Z","country":"Lebanon"},
// {"id":7,"email":"loren_yundt@gmail.com","first":"Dejah","last":"Kshlerin","company":"Facebook","created_at":"2014-11-11T12:20:53.154Z","country":"Egypt"},
// {"id":8,"email":"kenton_macejkovic80@hotmail.com","first":"Ellen","last":"Schaefer","company":"Google","created_at":"2014-07-23T02:00:28.649Z","country":"Israel"},
// {"id":9,"email":"pascale5@yahoo.com","first":"Sven","last":"Funk","company":"Facebook","created_at":"2014-04-11T12:43:28.977Z","country":"Macao"},
// {"id":10,"email":"frank34@yahoo.com","first":"Ryleigh","last":"Cole","company":"Google","created_at":"2014-10-18T05:50:28.626Z","country":"Congo"},
// {"id":11,"email":"harry65@hotmail.com","first":"Cooper","last":"Grimes","company":"Apple","created_at":"2014-04-29T06:41:20.214Z","country":"Reunion"},
// {"id":12,"email":"kiana.schowalter@gmail.com","first":"Esteban","last":"Homenick","company":"Google","created_at":"2014-12-29T18:46:35.269Z","country":"Guadeloupe"},
// {"id":13,"email":"josh_batz60@gmail.com","first":"Lucinda","last":"Waters","company":"Amazon","created_at":"2015-03-13T12:15:50.844Z","country":"Lebanon"},
// {"id":14,"email":"zula36@hotmail.com","first":"Jarvis","last":"Grimes","company":"Amazon","created_at":"2014-04-23T23:56:11.268Z","country":"Ghana"},
// {"id":15,"email":"romaine21@gmail.com","first":"Jordon","last":"Turcotte","company":"Facebook","created_at":"2014-07-13T00:07:36.299Z","country":"Serbia"},
// {"id":16,"email":"abdul3@hotmail.com","first":"Marques","last":"Bins","company":"Microsoft","created_at":"2014-04-10T14:07:26.141Z","country":"Sudan"},
// {"id":17,"email":"van39@hotmail.com","first":"Edgar","last":"Jaskolski","company":"Amazon","created_at":"2014-11-18T22:42:23.788Z","country":"Wallis and Futuna"},
// {"id":18,"email":"emie_corkery82@yahoo.com","first":"Adell","last":"Rodriguez","company":"Facebook","created_at":"2014-07-19T07:19:38.388Z","country":"Sierra Leone"},
// {"id":19,"email":"alexis62@hotmail.com","first":"Madonna","last":"Luettgen","company":"Amazon","created_at":"2014-08-25T04:29:45.139Z","country":"Namibia"},
// {"id":20,"email":"lucius_hills53@yahoo.com","first":"Andre","last":"Huel","company":"Amazon","created_at":"2014-08-22T22:56:27.222Z","country":"Georgia"},
// {"id":21,"email":"jeanette.leannon29@hotmail.com","first":"Darrin","last":"Larson","company":"Microsoft","created_at":"2014-09-01T21:22:39.559Z","country":"Lebanon"},
// {"id":22,"email":"concepcion_kiehn@hotmail.com","first":"Johann","last":"Hintz","company":"Amazon","created_at":"2014-12-29T18:29:33.150Z","country":"Congo"},    
// ];


$.ajax({
    url:"http://localhost/3001/api/customers",
    method : "GET",
    dataType : "json",
    data:{
        number: size,
        page: page
    },
    success : function(resp){
        console.log(resp);
        resolve(resp);
    },
    error : function(err){
        console.log(err);
        reject(err);
    }
});




addEventListener("DOMContentLoaded",
function(){
    console.log("le fichier est chargé");
    $("#customers").loadTemplate($("#tpnCustomer"),customers);

});
