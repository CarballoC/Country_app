
document.querySelector('#get-country').addEventListener('click', loadCountry);

function loadCountry(e){
    const country = document.querySelector('#country').value;    
    const xhr = new XMLHttpRequest();  
    xhr.open("GET", `https://restcountries.eu/rest/v2/name/${country}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = "";
            response.forEach(function(country){
                output +=`<img src ="${response[0].flag}" />
                          <li>Name: ${response[0].name}</li>
                          <li>Capital: ${response[0].capital}</li>
                          <li>Languages: ${response[0].languages[0].name}</li>
                          <li>Calling Code: ${response[0].callingCodes[0]}</li>
                          <li>Location: ${response[0].subregion}</li>`
                          
            })
            document.getElementById('country-data').innerHTML = output;       
         }
    }
    xhr.send();
    
   e.preventDefault();
}
    