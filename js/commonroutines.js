	
	var mydb; //global variables
	var dbName="dbinventory"; var alias="inventory"; 
	
	//values="VALUES('"+ id +"','" + product_id +"','"+ qnty +"','" + price +"','" + subtotal + "','" + itemname + "')";
	

	function CreateDB(dbName,alias){ //set-up database name	  
         console.log ('Creating database');
         mydb = window.openDatabase(dbName, '1.0', alias, 2 * 1024 * 1024);     
		 console.log ('Finished Creating database');		 
	 }
	function CreateTable(tblname){ //create a table
		mydb.transaction(function (txs) {
		txs.executeSql("CREATE TABLE IF NOT EXISTS '"+ tblname +"'(id unique, product_id, qnty, price,subtotal,itemname,onserver)");
        });
	 }	
   function InsertTable(tblname,values){//Insert into a table
		mydb.transaction(function (txs) {
      //  txs.executeSql("DELETE FROM '"+tblname +"' WHERE userID='"+ userID +"'");	
		//txs.executeSql("INSERT INTO '"+ tblname +"' (userID,data) VALUES('"+ userID +"','" +data +"')");  
		txs.executeSql("INSERT INTO '"+ tblname +"' (id,product_id, qnty , price ,subtotal, itemname,onserver) VALUES("+ values+")");  	
		
		
         });
	 }	
	 function dropTable(tblname){//Drop a table
		mydb.transaction(function (txs) {
        txs.executeSql("DROP TABLE IF EXISTS'"+ tblname +"'");        
         });
	 }
	 function deleteRecord(tblname,keyfield,keyvalue){//Drop a table
		mydb.transaction(function (txs) {
       	txs.executeSql("DELETE FROM '"+ tblname +"' WHERE '"+ keyfield +"'='"+ keyvalue +"'");			
         });
	 }
	 function createDatalist(event,array,objectid) { // function to create a data list based on the input text value
		var input = event.target; // retireve the input element
		var list = document.getElementById(objectid);// retrieve the datalist element
		var min_characters = 0;// minimum number of characters before we start to generate suggestions
		if (input.value.length < min_characters ) { // if the number of characters in the search textbox is less dont run the search
        return;
		} else {  
                 list.innerHTML = ""; // clear any previously loaded options in the datalist
				for(var i = 0; i < array.length; i++){ //the array is obtained from the JSON data returned from server 
           		var pid = array[i].product_id;
			    var itemname = array[i].productname;
				 
                    var option = document.createElement('option'); // Create a new <option> element.
                     option.value = pid;
					 option.text = itemname;
                     list.appendChild(option);// attach the option to the datalist element
					
			       }     	
		}//end of else
	}//end of datalist function for sales

  function storeSession(usn){	
 // alert("Storing session");
	sessionStorage.setItem("usn",usn);
	document.getElementById("sessionText").innerHTML="Loged in as:  "+ usn;
	}
  function clearSession(){
  //alert("clearing session");
	 sessionStorage.setItem("usn","");	
	 window.location.href = baseURL +"index.html#mfloginPage";
  }
 function readSession(){ //checking if the session has a login value
    return sessionStorage.usn;	 
 }
 function checkonPageshow(){// on click of back and forward button, we check if the login session is still active
 if (readSession()==""){
 //go back to login page
	window.location.href = baseURL +"index.html#mfloginPage";
 }else{//Stay on where you are  
 //window.location.href = baseURL +"index.html";
 }
 }
 
 //example of usage
 // from here, lets save to local sqllite database
	
	
	
	//end of local sqllite database