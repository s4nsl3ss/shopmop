// JavaScript Document
var add = document.getElementById("add");
var del = document.getElementById("delete");
var mainrow = document.getElementById("mainrow");
var editable = document.getElementById("editable");
var clone = editable.cloneNode(true);
clone.removeAttribute("id");
var table = document.getElementById("list");

var printer = document.getElementById("print"); 


var share = document.getElementById("share");
var sharebox = document.getElementById("shareboxdiv");

//ADD + DELETE
	add.onclick = function () {
		var clone2 = clone.cloneNode(true);
		table.appendChild(clone2);
		}
		
	del.onclick = function () {
		var lastchild = table.lastChild;
		if( table.childElementCount > 1 )
		table.removeChild(lastchild);		 
		}
		
 /*   function printPDF(){
    var printDoc = new jsPDF();


    };

	printer.onclick = function () {
    printDoc.fromHTML($('#pdf').get(0), 10, 10, {
        'width': 180
    });

    printDoc.autoPrint()
    printDoc.output("dataurlnewwindow") // this opens a new popup,  after this the PDF opens the print window view but there are browser inconsistencies with how this is handled
	}
*/
//SHAREBOX	
	share.onclick = function () {
		if(sharebox.getAttribute("class") == "visible")
		sharebox.setAttribute("class" , "hidden");
		else
		sharebox.setAttribute("class" , "visible");
		}
	
	
//PRINT

	function printDiv() {
     var printContents = document.getElementById('printable').innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
	}

//DELETE
	function suretodelete()
{
 var where_to= confirm("Do you really want to delete your list?");
 if (where_to== true)
 {
   window.location="ListView.html";
 }
 else;
}


//REGISTRATION


function validateForm() {

var felder = document.getElementsByTagName("input");
var ergebnis = true;

//prüfe ob alle felder ausgefüllt sind

for(x=0; x < felder.length; x++) {
	feld = felder[x]; //erstelle ARRAY
	
		
		if (feld.value == "") {
			feld.className= "error";
			ergebnis = false;
			}
		else {
			feld.className= "";
			}	
		}
	}
