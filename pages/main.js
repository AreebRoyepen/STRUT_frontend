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
        //document.location = 'landing-page.html'
      }
    }

	request.send(formData);
  }

  function render_data(data_all){

    var data_string = "";
    for(x=0;x<data_all.data.length;x++){
      data_string+=("<p id='spin-in' style='background-color: rgba(255, 69, 0,"+1.5/(x+1)+");'>"+data_all.data[x].note+"</p>");
    }

  }