'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // getCountryData = function(country){
// // const request = new XMLHttpRequest()
// // request.open('GET',`https://restcountries.com/v2/name/${country}`)
// // request.send() 

// // console.log(this.responseText);

// // request.addEventListener('load',function(){
  
// //     const [data] = JSON.parse(this.responseText)
// //     console.log(data);

// //     const html = `
// //     <article class="country">
// //       <img class="country__img" src="${data.flag}" />
// //       <div class="country__data">
// //         <h3 class="country__name">${data.name}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${data.population} people</p>
// //         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //       </div>
// //     </article>
    
// //     `;
// //      countriesContainer.insertAdjacentHTML('beforeend',html)
// //      countriesContainer.style.opacity = 1
// //  })
// // }
// // getCountryData('ethiopia');
// // getCountryData('australia')
// // getCountryData('canada')
// //////////////// storing html and coutriescontainer property in  to function calling inside another function
const renderCountry = function(data,classname = ''){    
            const html = `
            <article class="country ${classname}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
            </article>
            
            `;
             countriesContainer.insertAdjacentHTML('beforeend',html)
             countriesContainer.style.opacity = 1
         }
// getCountryAndNegihbour = function(country){
//     ////// ajax calls country1
//     const request = new XMLHttpRequest()
//     request.open('GET',
//     `https://restcountries.com/v2/name/${country}`)
//     request.send() 
//     console.log(this.responseText);
//     request.addEventListener('load',function(){
      
//         const [data] = JSON.parse(this.responseText)
//         console.log(data);
//         /////////render country
//          renderCountry(data)

//          ////////// get negihbour country
//          const [negibour] = data.borders;

//           if(!negibour) return;
//         ////// ajax calls country2
//          const request1 = new XMLHttpRequest()
//          request1.open('GET',
//          `https://restcountries.com/v2/alpha/${negibour}`)
//          request1.send() 
// ///////////////////////////////// eventlistener
//          request1.addEventListener('load',function(country){
//            const data1 = JSON.parse(this.responseText)
//            console.log(data1);

//            renderCountry(data1,'negibour')
//          })
        
//      })
//     }

// getCountryAndNegihbour('portugal')

const request = fetch
('https://restcountries.com/v2/name/portugal')
console.log(request);

const getCountryData = function(country){
    fetch
(`https://restcountries.com/v2/name/${country}`)
.then(function(response){
    console.log(response);
    return response.json()
}).then(function(data){
    console.log(data);
    renderCountry(data[0])
})

}
getCountryData('portugal')