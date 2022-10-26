
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const something = function(data){

    const html = `
    <article class="country">
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
};

requesterFunction = function(imag){
    const requester = new XMLHttpRequest();
    requester.open('GET','www.google.com');
    requester.send();
    
    
    requester.addEventListener('load',function(){
        const [requestern ]= JSON.parse(this.responseText);
        console.log(requestern);
//////////////////////////////
        something(data)

//////////////////////////
        const requester1 = new XMLHttpRequest();
        requester1.open('GET','www.google.com');
        requester1.send();
    //////////////////////////////////////////
        requester1.addEventListener('load',function(){
            const requestern2 = JSON.parse(this.responseText);
            console.log(requestern2);

            something(data1)

    });
}

requesterFunction('portugal');