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
      tableText += "<td>" + user.HBFinish + "</td>";
      tableText += "<td>" + user.TIEFBAUFINISH + "</td>";
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
      tableText += "<td id='dada'>" + user.HBFinish + "</td>";
      tableText += "<td>" + user.TIEFBAUFINISH + "</td>";
      tableText += `<td><button onclick="displayForm()" class="bttn"><img src="../background/editIcon.png"></button></td>`;
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
function topFunction() {
    //   document.body.scrollTop = 1200;
      document.documentElement.scrollTop = 1180;
}