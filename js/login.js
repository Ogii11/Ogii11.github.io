function login(){
  
    let dataToSend = [];
    dataToSend[0] = document.querySelector('input[name="email"]').value;
    dataToSend[1] = document.querySelector('input[name="password"]').value;
      fetch('http://localhost:8080/login',{
          method:"POST",
          body:JSON.stringify(dataToSend),
          credentials: 'include',
          headers: { 
              'content-type': 'application/json',
        } 
      })
      .then(e => e.json())
      .then(data => {
          console.log(data)
          if(data.email) window.location.href = window.location + "/proba.html";
      })
      .catch(err => console.log(err))
  }