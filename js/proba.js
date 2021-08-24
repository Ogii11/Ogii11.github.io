let userId = 1;

let url = "http://localhost:8080/proba";

// console.log("loading");


function search(){
	let dataToSend = {};
	dataToSend.FIRSTNAME = document.querySelector('input[name="FirstName"]').value;
  dataToSend.NAME = document.querySelector('input[name="Surname"]').value;
  dataToSend.CO_ID = document.querySelector('input[name="CoId"]').value;
  dataToSend.CITY = document.querySelector('input[name="City"]').value;
  dataToSend.STREET = document.querySelector('input[name="Street"]').value;
  dataToSend.HAUSNUMMER = document.querySelector('input[name="number"]').value;
  dataToSend.DP = document.querySelector('input[name="DpNo"]').value;
  // dataToSend.STATUS = document.querySelector('input[name="Status"]').value;
  dataToSend.PHONE = document.querySelector('input[name="Tel"]').value;
  dataToSend.AREAPOP = document.querySelector('input[name="AreaPop"]').value;
  dataToSend.TZIP = document.querySelector('input[name="Tzip"]').value;
  dataToSend.EMAIL = document.querySelector('input[name="Email"]').value;
  dataToSend.HBVOM = document.querySelector('input[name="HbVom"]').value;
  dataToSend.TFVOM = document.querySelector('input[name="TfbVom"]').value;
  dataToSend.FVOM = document.querySelector('input[name="FazaVom"]').value;
  dataToSend.DPGVom = document.querySelector('input[name="DpgVom"]').value;
  dataToSend.POPVom = document.querySelector('input[name="PopVom"]').value;
  dataToSend.MVOM = document.querySelector('input[name="MVom"]').value;
  dataToSend.AVOM = document.querySelector('input[name="AVom"]').value;

  if(document.getElementById('hb_finish_yes').checked || document.getElementById('hb_finish_no').checked) {
    dataToSend.HBFinish = document.querySelector('input[name="hbfinish"]:checked').value
  }
  if(document.getElementById('dp_finish_yes').checked || document.getElementById('dp_finish_no').checked) {
    dataToSend.DPFinish = document.querySelector('input[name="dpfinish"]:checked').value;
  }
  if(document.getElementById('pop_finish_yes').checked || document.getElementById('pop_finish_no').checked) {
    dataToSend.POPFinish = document.querySelector('input[name="popfinish"]:checked').value;
  }
  if(document.getElementById('tfb_finish_yes').checked || document.getElementById('tfb_finish_no').checked) {
    dataToSend.TIEFBAUFINISH = document.querySelector('input[name="tfbfinish"]:checked').value;
  }
  if(document.getElementById('faza_finish_yes').checked || document.getElementById('faza_finish_no').checked) {
    dataToSend.FFINISH = document.querySelector('input[name="fazafinish"]:checked').value;
  }
  if(document.getElementById('m_finish_yes').checked || document.getElementById('m_finish_no').checked) {
    dataToSend.MFINISH = document.querySelector('input[name="mfinish"]:checked').value;
  }
  if(document.getElementById('akt_finish_yes').checked || document.getElementById('akt_finish_no').checked) {
    dataToSend.AKTIVIRUNGFINISH = document.querySelector('input[name="aktfinish"]:checked').value;
  }
  if(document.getElementById('ver_finish_yes').checked || document.getElementById('ver_finish_no').checked) {
    dataToSend.VermessungFinish = document.querySelector('input[name="verfinish"]:checked').value;
  }
  
  fetch("http://localhost:8080/proba", {
	  method: 'POST',
	  headers: {
		  'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(dataToSend)
    }).then(e => e.json())
    .then(data => {
	    let tableText = "";
      data.forEach((user) => {
      tableText += "<tr>";
      tableText += "<td>" + user.FIRSTNAME + "</td>";
      tableText += "<td>" + user.NAME + "</td>";
      // tableText += "<td>" + user.EMAIL + "</td>";
      tableText += "<td>" + user.PHONE + "</td>";
      tableText += "<td>" + user.CITY + "</td>";
      tableText += "<td>" + user.STREET + "</td>";
      tableText += "<td>" + user.HAUSNUMMER + "</td>";
      tableText += "<td>" + user.AREAPOP + "</td>";
      tableText += "<td>" + user.DP + "</td>";
      if(user.HBFinish==='DA'){
        tableText += "<td style='color:red'><img src='../background/cor1.png'></td>";
      }else{
        tableText += "<td style='color:red'><img style='opacity:0.8; width:30px;heigth:30px' src='../background/iks3.png'></td>";
      }
      if(user.TIEFBAUFINISH==='DA'){
        tableText += "<td style='color:red'><img src='../background/cor1.png'></td>";
      }else{
        tableText += "<td style='color:red'><img style='opacity:0.8;width:30px;heigth:30px' src='../background/iks3.png'></td>";
      }
      // tableText += "<td style='color:red'>" + user.HBFinish + "</td>";
      // tableText += "<td>" + user.TIEFBAUFINISH + "</td>";
      tableText += "</tr>";
      // console.log(user);
    });

    document.getElementById("tablebodylol").innerHTML = tableText;
})
.catch(err => console.log(err))
}



let url2 = "http://localhost:8080/tableAll";

axios
  .post(url2)
  .then(function (response) {
    console.log(response);
    let json = response.data;
    // console.log(json)
    let tableText = "";
    json.forEach((user) => {
      tableText += "<tr>";
      tableText += "<td>" + user.FIRSTNAME + "</td>";
      tableText += "<td>" + user.NAME + "</td>";
      // tableText += "<td>" + user.EMAIL + "</td>";
      tableText += "<td>" + user.PHONE + "</td>";
      tableText += "<td>" + user.CITY + "</td>";
      tableText += "<td>" + user.STREET + "</td>";
      tableText += "<td>" + user.HAUSNUMMER + "</td>";
      tableText += "<td>" + user.AREAPOP + "</td>";
      tableText += "<td>" + user.DP + "</td>";
      if(user.HBFinish==='DA'){
        tableText += "<td style='color:red'><img src='../background/cor1.png'></td>";
      }else{
        tableText += "<td style='color:red'><img style='opacity:0.8; width:30px;heigth:30px' src='../background/iks3.png'></td>";
      }
      if(user.TIEFBAUFINISH==='DA'){
        tableText += "<td style='color:red'><img src='../background/cor1.png'></td>";
      }else{
        tableText += "<td style='color:red'><img style='opacity:0.8;width:30px;heigth:30px' src='../background/iks3.png'></td>";
      }
      // tableText += "<td id='dada'>" + user.HBFinish + "</td>";
      // tableText += "<td>" + user.TIEFBAUFINISH + "</td>";
      tableText += "</tr>";
      // console.log(user);
    });

    document.getElementById("tablebodylol").innerHTML = tableText;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

mybutton = document.getElementById("myBtn");

// When the user scrolls down 1300px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1250 ||
    document.documentElement.scrollTop > 1250
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// if(document.querySelectorAll('td').value==='NE'){
//   document.querySelectorAll('td').style.color='red';
// }

// When the user clicks on the button, scroll to the top of the table
function topFunction() {
//   document.body.scrollTop = 1200;
  document.documentElement.scrollTop = 1160;
}

function exportData() {
  var table = document.getElementById("tblStocks");

  var rows = [];

  for (var i = 0, row; (row = table.rows[i]); i++) {
    column1 = row.cells[0].innerText;
    column2 = row.cells[1].innerText;
    column3 = row.cells[2].innerText;
    column4 = row.cells[3].innerText;
    column5 = row.cells[4].innerText;
    column6 = row.cells[5].innerText;
    column7 = row.cells[6].innerText;
    column8 = row.cells[7].innerText;
    column9 = row.cells[8].innerText;
    column10 = row.cells[9].innerText;

    rows.push([column1, column2, column3, column4, column5, column6, column7, column8, column9, column10]);
  }
  csvContent = "data:text/csv;charset=utf-8,";

  rows.forEach(function (rowArray) {
    row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "vermessung.csv");
  document.body.appendChild(link);

  link.click();
}

function fnExcelReport()
{
    var tab_text="<table border='2px'><tr height='150px' bgcolor='#87AFC6'>";//background
    var textRange; var j=0;
    tab = document.getElementById('tblStocks'); // id of table

    for(j = 0; j < tab.rows.length; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, ""); 
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    // var ua = window.navigator.userAgent;
    // var msie = ua.indexOf("MSIE "); 

    // if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    // {
    //     txtArea1.document.open("txt/html","replace");
    //     txtArea1.document.write(tab_text);
    //     txtArea1.document.close();
    //     txtArea1.focus(); 
    //     sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    // }   
        sa = window.location.assign('data:application/vnd.ms-excel; charset=utf-8,' + encodeURIComponent(tab_text));

    return (sa);
}
