(function (global){
     
    // set up a namespace for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported!");
            retuen (null);
        }
    }

    var request = getRequestObject();
    var myhandler = null;
// Make an Ajax GET request to 'requestUrl'

ajaxUtils.sendGetRequest = 
    function (requestUrl, responcehaldler){
        var request = getRequestObject();
        request.onreadystatechange = function(){
            handleResponse(request, responcehaldler);
        };

        request.open("GET", requestUrl, true);
        request.send(null); //for POST only
    };


function handleResponse(request, responcehaldler){
    if((request.readyState == 4) && (request.readyState == 200)){
        responcehaldler(request);
    }
}

})