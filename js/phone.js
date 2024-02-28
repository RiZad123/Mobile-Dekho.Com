
// input API data....
const loadPhone = async (searchText , isShowAll) =>{
     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
     const data = await res.json();
     const phones = data.data;
    displayPhones(phones , isShowAll);
}




// Sob Data Theke Akta Akta Data Alada Kora.....
const displayPhones = (phones , isShowAll) =>{

//    --Step1--  Khothay Div Boshabo
    const phoneContainer = document.getElementById('phone-container');

    // Ager Search Result Clear Kora
     phoneContainer.textContent =  '';
      

    //  Show Al Button More Then 12 phone
     const showAllContainer = document.getElementById('show-all-container')
     
     if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
     }else{
        showAllContainer.classList.add('hidden')
     };
    
     
     //  Koyta Phone Show Korbe Ta Nirdaron
     console.log('is show all' , isShowAll);

     if(!isShowAll){
        phones = phones.slice(0,12 );
     }


    phones.forEach(phone =>{
        console.log(phone);

        //Prottek Ta Card Ke Show Korar Jonno Div Banano 4 ta Step....
        // Create a Div -step2-
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-white shadow-xl  `

        // --Step3-- Set Inner HTML
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}"  class="rounded-xl" />
         </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p class="p-2">${phone.brand}</p>
        <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
        </div>
        </div>
        `
        //  --Step4-- Append to the Phone Container

        phoneContainer.appendChild(phoneCard);
    })
}


// Search Button
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    console.log(searchText);
    loadPhone(searchText , isShowAll);
}




// Handle Show All Function
const handleShowAll = () =>{
    handleSearch(true);
}





// Show Details 



