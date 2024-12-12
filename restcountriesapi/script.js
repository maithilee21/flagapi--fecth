

function get_val(cuurTag){

    console.log(cuurTag.innerHTML);
    var firstLetter = cuurTag.innerHTML
    getDataWithLetter(firstLetter)
}


function getDataWithLetter(countname){
    console.log(countname)

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200 ){
        console.log(xml.responseText);
        var result = JSON.parse(xml.responseText);

        const filteredCountries = result.filter((country) =>
            country.name.common.startsWith(countname)
        );
        
        filteredCountries.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })
    }   
    }

    xml.open('GET', `https://restcountries.com/v3.1/name/${countname}`);
    xml.send();
}


function getDataWithName(countname){
    console.log(countname)

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200 ){
        console.log(xml.responseText);
        var result = JSON.parse(xml.responseText);
        
        result.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })
    }   
    }

    xml.open('GET', `https://restcountries.com/v3.1/name/${countname}`);
    xml.send();
}

document.getElementById('search').onclick = function(ev){
    ev.preventDefault();
    console.log('TEST');
    var txtdata = document.getElementById('countryName').value;

    console.log(txtdata);
    getDataWithName(txtdata)

    document.getElementById('countryName').value = '';

}


function getAllData(){
    // console.log()

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200 ){
        console.log(xml.responseText);
        var result = JSON.parse(xml.responseText);

        
        result.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })
    }   
    }

    xml.open('GET', `https://restcountries.com/v3.1/all`);
    xml.send();
}


document.getElementById('allCountries').onclick = function(ev){
    ev.preventDefault();
    console.log('test');
    getAllData();
}