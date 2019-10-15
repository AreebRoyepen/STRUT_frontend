function myFunction() {
     
    var request= new XMLHttpRequest();

    var formData = new FormData();

    formData.append("username", "3750662");
    formData.append("password", "areeb123"); // number 123456 is immediately converted to a string "123456"

	  request.open("POST","http://127.0.0.1:8000/api/login");
	  request.onload=function(){
		  var data=JSON.parse(request.responseText);
      console.log(data);
      
      if (data.response){
        document.location = 'landing-page.html'
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