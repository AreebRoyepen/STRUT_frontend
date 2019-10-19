function login() {
     
    var request= new XMLHttpRequest();

    var formData = new FormData();

    // retreiving data from html page
    var username = document.getElementById("login-page-username").value;
    var password = document.getElementById("login-page-password").value;

    console.log(username + " " + password);


    formData.append("username", username);
    formData.append("password", password);

    //sending post data to external api
    request.open("POST","http://127.0.0.1:8000/api/login");
    

    // logic for handling received data
	  request.onload=function(){
		  var data=JSON.parse(request.responseText);
      console.log(data);      

      if (data.response){
        console.log("SLAMAT");
        
        document.location = 'home-page.html'
        console.log(data.response);
      }
    }

	request.send(formData);
}


// provides data to populate timetable
// need to provide student number
  function timetable(){

    var request= new XMLHttpRequest();

    var formData = new FormData();

    // retreiving data from html page
    //var username = document.getElementById("timetable-username").value;
    username = "3750662"
    console.log(username);
    formData.append("studentNumber", username);

    //sending post data to external api
    request.open("POST","http://127.0.0.1:8000/api/viewTimetable");

    // logic for handling received data
	  request.onload=function(){
		  var data=JSON.parse(request.responseText);
      console.log(data);   

      //data = getVenueName(data);
      
      document.getElementById("x").innerHTML = "bob";

      console.log(data);

    }

	  request.send(formData); 

  }



  // for directions page
  function getBuildingNames(){

    var request= new XMLHttpRequest();

    var formData = new FormData();

    // retreiving data from html page
    var src = document.getElementById("source").value;

    var dst = document.getElementById("destination").value;

    console.log(src + " " + dst);


    formData.append("from", src);
    formData.append("to", dst);


    //sending post data to external api
    request.open("POST","http://127.0.0.1:8000/api/navigate");
    

    // logic for handling received data
	  request.onload=function(){
		  var data=JSON.parse(request.responseText);
      console.log(data);      
    }

	  request.send(formData);
  

  }



