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

      
      for (var i in data) {
        document.getElementById(String(data[i]['period']) +"x"+ String(data[i]['day'])).innerHTML =data[i]['module'] ;
        localStorage.setItem(String(data[i]['period']) +"x"+ String(data[i]['day']), String(data[i]['venue']));
        console.log(localStorage.getItem(String(data[i]['period']) +"x"+ String(data[i]['day'])));


        //localStorage.setItem(String(data[i]['period']) +"x"+ String(data[i]['day']),data[i]['venue']);
      }

      for (var i=1; i<7; i++ ){
        for (var j=1; j<6; j++){
          if (document.getElementById(String(i) +"x"+ String(j)).innerHTML == ""){
            document.getElementById(String(i) +"x"+ String(j)).onclick=null;
            console.log(String(i) +"x"+ String(j));
          }
        }
      } 

      console.log(data);
    }


	  request.send(formData); 

  }


  // for directions page
  function getdirections(){

    //var request= new XMLHttpRequest();

    //var formData = new FormData();

    // retreiving data from html page
    //var src = document.getElementById("source").value;

    //var dst = document.getElementById("destination").value;

    //console.log(src + " " + dst);


    //formData.append("from", src);
    //formData.append("to", dst);


    //sending post data to external api
    //request.open("POST","http://127.0.0.1:8000/api/navigate");
    




    // logic for handling received data
	  //request.onload=function(){
		 // var data=JSON.parse(request.responseText);
      //console.log(data);      
    //}

	  //request.send(formData);
  
    var location = document.getElementById("location").value;
    var destination = document.getElementById("testing").value;
    console.log(location);
    console.log(destination);


  }


  // provides data to populate timetable
// need to provide student number
function examtimetable(){

  var request= new XMLHttpRequest();

  var formData = new FormData();

  // retreiving data from html page
  //var username = document.getElementById("timetable-username").value;
  username = "3750662"
  console.log(username);
  formData.append("studentNumber", username);

  //sending post data to external api
  request.open("POST","http://127.0.0.1:8000/api/viewExamTimetable");

  // logic for handling received data
  request.onload=function(){
    var data=JSON.parse(request.responseText);
    console.log(data);   

    console.log(data[1]["venue"]);
    console.log(data[1]["module"]);
    console.log(data[1]["date"]);
    console.log(data[1]["period"]);
    document.getElementById("1x1").innerHTML = "sadas";

    for (var i=0;i<data.length;i++) {
      console.log(i);
      document.getElementById(parseInt(i+1)+ "x" + parseInt(1)).innerHTML =data[i]['date'] ;
      document.getElementById(parseInt(i+1)+ "x" + parseInt(2)).innerHTML =data[i]['module'] ;
      document.getElementById(parseInt(i+1)+ "x" + parseInt(3)).innerHTML =data[i]['venue'] ;
      document.getElementById(parseInt(i+1)+ "x" + parseInt(4)).innerHTML =data[i]['period'] ;
      localStorage.setItem("exam-" + parseInt(i+1)+ "x" + parseInt(3), String(data[i]['venue']));
      console.log("setting -- " + "exam-" + parseInt(i+1)+ "x" + parseInt(3), String(data[i]['venue']) );
      console.log("access = " +"exam-" + parseInt(i+1)+ "x" + parseInt(3) );
      console.log("exam venue - " + String(data[i]['venue']) );

    }

    for (var i=1; i<6; i++ ){
      for (var j=1; j<5; j++){
        if (!document.getElementById(String(i) +"x"+ String(j)).innerHTML){
          document.getElementById(String(i) +"x"+ String(j)).onclick=null;
          console.log(String(i) +"x"+ String(j));
        }
      }
    } 

    console.log(data);
  }


  request.send(formData); 

}

function bookvenue(){
  
  var venue = document.getElementById("venue").value;
  var date = document.getElementById("date").value;
  var period = document.getElementById("period").value;  

  formData.append("period", period);
  formData.append("date", date);
  formData.append("venue", venue);
  formData.append("id", "3750662");

  console.log(venue);
  console.log(date);
  console.log(period);

    //sending post data to external api
    request.open("POST","http://127.0.0.1:8000/api/bookVenue");
  

    // logic for handling received data
    request.onload=function(){
      var data=JSON.parse(request.responseText);
      console.log(data);
  
      if (data.response){
        console.log("SLAMAT");
        
        //document.location = ''
  
  
      }
     request.send(formData);
    
    }


}

function userInfo(){

  var request= new XMLHttpRequest();

  var formData = new FormData();

  // retreiving data from html page

  formData.append("studentNumber", "3750662");

  //sending post data to external api
  request.open("POST","http://127.0.0.1:8000/api/studentDetails");
  

  // logic for handling received data
  request.onload=function(){
    var data=JSON.parse(request.responseText);
    console.log("is this thing on")

    console.log(data.modules[0]);
    document.getElementById("name").innerHTML = data.user.first_name;
    document.getElementById("last name").innerHTML = data.user.last_name;
    document.getElementById("email").innerHTML = String(data.user.username) + "@myuwc.ac.za" ;
    document.getElementById("student number").innerHTML = data.user.username ;
    var modules ="";
    for(var i=0; i<data.modules.length;i++){
      if (i==0){
        modules += String(data.modules[i].modulename);

      }else{
      modules +=", " + String(data.modules[i].modulename);
      }
    }
    document.getElementById("modules").innerHTML = modules;
      


    if (data.response){
      console.log("SLAMAT");
      
      //document.location = ''

    }
  
  }
  request.send(formData);

}