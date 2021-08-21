// DOM manipulation

// alert("hello");
// console.log (document.getElementById("title"));




/* Print input name in console */
// function sayHello() {
//     // body...
//     console.log(document.getElementById("name").value);

// }



// function sayHello()
// {
//     var name = document.getElementById("name").value;
//     var message = "Welcome " + name + "!";
//     console.log(message);
//     document.getElementById("h2content").textContent = message;

//     if (name === "Student"){
//         // var title = document.getElementById("title");
//         //query selector works like cssSelecter
//         var title = document.querySelector("#title").textContent; 
//         title += "& Loving it! ";
//         // Explicitly using  this function
//         document.querySelector("#title")
//         .textContent =title;
//     }

// }





// Event Handling
document.addEventListener("DOMContentLoaded",
    function (){
        function sayHello(event){
            console.log(event);

            this.textContent = "said it!";
            var name = document.getElementById("name").nodeValue;
            var message = "<h2> Hello " +name + "! </h2>";
            document.getElementById("content").innerHTML = message;

            if(name === "student"){
                var title = document.querySelector("#title").textContent;
                title += "& Loving it!";
                document.querySelector("button").textContent("click", sayHello);
            }
        }
    }


)