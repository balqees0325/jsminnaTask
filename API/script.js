
//Global variable 
let countries; //contains fetched data.

// countries list.
const countriesList = document.getElementById('countries');

// add eventlistener
countriesList.addEventListener('change', newCountrySelection) 
 function newCountrySelection(event){
  //console.log(event.target.value);
  countryInfo(event.target.value);
}
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log('Error:', err));
const initialize = countriesData => {
  countries = countriesData;
  let options = '';
    countries.forEach(country =>
    options += `<option value ='${country.alpha3Code}'>${country.name}</option>`);
  countriesList.innerHTML = options;
  // console.log(countriesList);
  // console.log(countriesList.value);
  // console.log(countriesList.length);
  // console.log(countriesList.selectedIndex);
  //countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);

  countryInfo(countriesList[countriesList.selectedIndex].value);
 }

 function countryInfo(countryByAlpha3Code) {
   const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);

  document.querySelector('#flag-container img').src = countryData.flag;

  document.querySelector('#flag-container img').alt = `Flag of ${countryData.name}`;

   document.getElementById('capital').innerHTML = countryData.capital;

  document.getElementById('code').innerHTML = `+${countryData.callingCodes[0]}`;

  document.getElementById('population').innerHTML = countryData.population.toLocaleString('en-US');

  document.getElementById('currencies').innerHTML = countryData.currencies.filter(currency => currency.name).map(currency => `${currency.name} (${currency.code})`).join('* ');

  document.getElementById('region').innerHTML = countryData.region;

  document.getElementById('subregion').innerHTML = countryData.subregion;

}
