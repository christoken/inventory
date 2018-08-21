
function Tosale(id, product_id, qnty, price,subtotal,itemname) {
    this.id = id;
	this.product_id = product_id;
    this.itemname = itemname;
    this.qnty = qnty;
    this.price = price;
	this.subtotal = subtotal;
    this.done = false;
}
	var mydb; //global variables
	var salesdata=[];//an array to hold sales data
	var tablename="ckc_Sales";
	var fields= "id,product_id, qnty , price ,subtotal, itemname,onserver";
	var values= "";
	
var tosales = new Array();// this is an array that will store a sales record
// a sales record has product ID, product_id, itemname, qnty,price,subtotal
var totalsaleamount=0;
var globalsaleid="";

window.onload = init;

function init() {
    var submitButton = document.getElementById("submit");
    submitButton.onclick = getFormData;

    getTosaleItems();
	var submitButton2 = document.getElementById("btsavesaletoserver");
   submitButton2.onclick = savesaletoserver;// call the function to send sells to server after btsavesale click
	//submitButton2.onclick = readfromtable;
	
}
function getTosaleItems() {//get data from localstorage 
    if (localStorage) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.substring(0, 4) == "tosale") {
                var item = localStorage.getItem(key);
                var tosaleItem = JSON.parse(item);
				//alert("Create db2");
                tosales.push(tosaleItem); // the the data from local storage to the array tosales
				//at this point save to slqlite
            }
        }
        addTosalesToPage();
    }
    else {
        console.log("Error: you don't have localStorage!"); 
    }
}

function addTosalesToPage() {//adding the 
    var ul = document.getElementById("tosaleList");
	  var ul = document.getElementById("salestable");
	
    var listFragment = document.createDocumentFragment();
    for (var i = 0; i < tosales.length; i++) {
        var tosaleItem = tosales[i];
        var li = createNewTosale(tosaleItem);
        listFragment.appendChild(li);
    }
    ul.appendChild(listFragment);

}
//display to the form page
function addTosaleToPage(tosaleItem) {
    var ul = document.getElementById("salestable");
    var li = createNewTosale(tosaleItem);
	//alert("Create db4");
	
    //ul.appendChild(li);
    document.forms[0].reset();
	return true;
	//document.getElementById("saleslist").innerHTML = "";
}

//creating one item to sale
function createNewTosale(tosaleItem) {
	//var table = document.createElement("table");
	var table = document.getElementById("salestable");
		
    var tablevaluerow = document.createElement("tr");// the row for the new item sale
	tablevaluerow.setAttribute("id", tosaleItem.id);
	
	var itemname = document.createElement("td");
	var product_id = document.createElement("td");
	var qnty = document.createElement("td");
	var price = document.createElement("td");
	var subtotal = document.createElement("td");
	
	itemname.innerHTML=tosaleItem.itemname;
	product_id.innerHTML=tosaleItem.product_id;
	qnty.innerHTML=tosaleItem.qnty;
	price.innerHTML=tosaleItem.price;
	subtotal.innerHTML=tosaleItem.subtotal;
   
    var spanDone = document.createElement("td");
    if (!tosaleItem.done) {
        spanDone.setAttribute("class", "notDone");
        spanDone.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    else {
        spanDone.setAttribute("class", "done");
        spanDone.innerHTML = "&nbsp;&#10004;&nbsp;";
    }
    
    var spanDelete = document.createElement("td");
    spanDelete.setAttribute("id", tosaleItem.id);
    spanDelete.setAttribute("class", "delete");
    spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";
	
	spanDelete.onclick = deleteItem;
	
	tablevaluerow.appendChild(product_id);
	tablevaluerow.appendChild(itemname);
	tablevaluerow.appendChild(qnty);
	tablevaluerow.appendChild(price);
	tablevaluerow.appendChild(subtotal);
    tablevaluerow.appendChild(spanDelete);
		 
    table.appendChild(tablevaluerow);
	var tsales =document.getElementById("totalsales");
	tsales.innerHTML="TOTAL SALES= "+ totalsaleamount;
    return table;
	
}
       // get the data from the form      
function getFormData() {//read the data from the form fields
	//alert("Create db");
	var product_id = document.getElementById("sale_input").value;//read the product_id of the item selected
	var datalist = document.getElementById("huge_list");

	for (var i=0;i<datalist.options.length;i++) //find the name of the selected item. data list does not get the description
    if (datalist.options[i].value == product_id) {
		var itemname=datalist.options[i].innerText;
		}
		
	if (checkInputText(itemname, "Please enter a Product name")) return;	
    //var product_id = idandname.options[idandname.selectedIndex].value;
    if (checkInputText(product_id, "Please enter a Product id")) return;
	
	  var price = document.getElementById("saleprice").value;
    if (checkInputText(price, "Please eThe sale price")) return;

    var qnty = document.getElementById("qnty").value;
    if (checkInputText(qnty, "Please quantity")) return;
	 
	 var subtotal = qnty* price;
    if (checkInputText(subtotal, "Subtotal cannot be zero")) return;
	
	totalsaleamount=totalsaleamount+subtotal;
       //var id = tosales.length;
	 var id = (new Date()).getTime();
    var tosaleItem = new Tosale(id, product_id, qnty, price,subtotal,itemname);
    tosales.push(tosaleItem);
	
	addTosaleToPage(tosaleItem);
	
	if(saveTosaleItem(tosaleItem)){// save to local storage
	//alert("Clearing"); 
	document.getElementById("sale_input").value="";// retrieve the id of the element to clear in readiness for the next item
    document.getElementById("saleprice").value="";// retrieve the id of the element to clear
    document.getElementById("qnty").value="";
   }
	   else{
		alert("We are unable to save to the local storage");   
		   
	   }
	   //save to local db
	   var serversaved=0	
	  salesdata = [id,product_id,qnty,price,subtotal,itemname,serversaved];
    	CreateDB(dbName,alias);	//creata a databsae to store salses records
	// dropTable('ckc_Sales');//
	// dropTable('hkc_Sales');
	 createTables();//Creates table ckc_sales and add the records being sold
  
  }
  	
 function CreateDB(dbName,alias){ // a function to set-up database name	  
         //console.log ('Creating database');
         mydb = window.openDatabase(dbName, '1.0', alias, 2 * 1024 * 1024);     
		 //console.log ('Finished Creating database');		 
	 }
	 
function createTables(){// a function to create table
	mydb.transaction(
        function (transaction) {
			transaction.executeSql('CREATE TABLE IF NOT EXISTS ckc_Sales(id INTEGER NOT NULL PRIMARY KEY, product_id TEXT NOT NULL,qnty INTEGER NOT NULL, price FLOAT,subtotal FLOAT, itemname TEXT,serversaved INTEGER );');
        }
    );
	InsertintoTable();// a function being called to insert a sales record into the sals local DB
}
function InsertintoTable(){ // a function to insert data into the table. 
	mydb.transaction(
	    function (transaction) {
		transaction.executeSql("INSERT INTO ckc_Sales(id, product_id, qnty, price, subtotal,itemname,serversaved) VALUES (?, ?, ?, ?, ?, ?,?)", [salesdata[0], salesdata[1], salesdata[2], salesdata[3], salesdata[4],salesdata[5], salesdata[6]]);
	    }
	);
}
function checkInputText(value, msg) {
    if (value == null || value == "") {
        alert(msg);
        return true;
    }
    return false;
}
//save to local storage
function saveTosaleItem(tosaleItem) {
	 if (localStorage) {
        var key = "tosale" + tosaleItem.id;
        var item = JSON.stringify(tosaleItem);
        localStorage.setItem(key, item);
		return true;
		    }
    else {
        console.log("Error: you don't have localStorage!");
		return false;
    }
	
} 
function readfromtable(){
	var datafromlocaldb=new Array();	//an array to hold data from the sales table
	CreateDB(dbName,alias);
	//select from a local database and pass the same to the server
		var tf=0;		 
	    mydb.transaction(function (txs3) {
	        txs3.executeSql('SELECT * FROM ckc_Sales WHERE serversaved=?' ,[tf], function(txs3, results){
			//alert("Legth= "+results.rows.length);
			 //var tosaleItem = JSON.parse(item);
			for (var i = 0; i < results.rows.length; i++) {//iterate through the records which need update
			var item = results.rows.item(i);			
				  datafromlocaldb.push(item);	
				//  alert(JSON.stringify(item));
		          
	          }
		  var tosalesJSONText=datafromlocaldb;
		   alert(JSON.stringify(tosalesJSONText));	
		  saveAlltoserverANDdelete(tosalesJSONText);		   
		});
		
		});
		
}
function saveAlltoserverANDdelete(tosalesJSONText){
	
	var url=serverURL +"savesalesarray.php";		
		
		$.ajax(
		{
        // Post select to url.
        type : 'post',
        url : url,
        dataType : 'json', // expected returned data format.
        data : {  
            // Data Sending With Request To Server
			tosalesJSONText: tosalesJSONText 
        },
        success : function(data){
            
        },
        complete : function(data,responseText){
             // do something, not critical.
			 if(responseText=="success"){
				 alert("Your data was saved successfully");
			 }else alert("There seems to be an error; Your data has not been updated");
			//alert(JSON.stringify(data));
						
			//update from the local websql to indicate that they have been savedon the server side.
			tf=1;
			mydb.transaction(function (txs4) {
			//txs4.executeSql("UPDATE page_settings SET fname=?, bgcolor=?, font=?, favcar=? WHERE id = 1", [fname, bg, font, car]);
	        txs4.executeSql('UPDATE ckc_Sales SET serversaved=? WHERE serversaved=0' ,[tf]);
			//alert("UPDATE has taken place ");
			});
			}
    });
	
}
function savesaletoserver(){		
		//go through the list picking values
		// subtract sales=look for the subtotal of that row and subtract by that
		var url=serverURL +"savesalesarray.php";
		
		var tosalesJSONText =  tosales ;
		$.ajax(
		{
        // Post select to url.
        type : 'post',
        url : url,
        dataType : 'json', // expected returned data format.
        data : {  
            // Data Sending With Request To Server
			tosalesJSONText: tosalesJSONText 
        },
        success : function(data){
             
        },
        complete : function(data){
            // do something, not critical.
			alert(JSON.stringify(data));
			//document.getElementById("tableareasales").innerHTML = tableheader3 +tablevalues3;
        }
    });
	
	
}
function deleteItem(e) {
    var id = e.target.id;	
    console.log("delete an item: " + id);
	
	// subtract sales=look for the subtotal of that row and subtract by that
	var subremoved=0;
	 for (var i = 0; i < tosales.length; i++) {
        if (tosales[i].id == id) {
			subremoved=tosales[i].subtotal;
           break;
        }
    }
	//alert(subremoved);
	totalsaleamount=totalsaleamount-subremoved;
	var tsales =document.getElementById("totalsales");
	tsales.innerHTML="TOTAL SALES= "+ totalsaleamount;
	
    // find and remove the item in localStorage
    var key = "tosale" + id;
    localStorage.removeItem(key);
	
	// find and remove the item in the array
    for (var i = 0; i < tosales.length; i++) {
        if (tosales[i].id == id) {
            tosales.splice(i, 1);
            break;
        }
    }
	
	//delete from the table//
	 //CreateDB(dbName,alias);
	mydb.transaction(
	    function (txs5) {
		txs5.executeSql("DELETE FROM ckc_Sales WHERE id='"+id+"'");
	    }
	);
    // find and remove the item in the page
    var li = e.target.parentElement;
   // var ul = document.getElementById("tosaleList");
   var ul = document.getElementById("salestable");
    ul.removeChild(li);
	
}
function clearDivfield(){
  
 // alert("We are calling the function");
 // var list = document.getElementById(objectid);// retrieve the id of the element to clear
 //for (var i=0;i<list.childNodes.length;i++){
 //list.childNodes[i].value="";  
 //}
     }  
