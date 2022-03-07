const BirthDate = document.querySelector ("#dateOfBirth");
const LuckyNumber = document.querySelector("#luckynumber");
const CheckNumButton = document.querySelector ("#check-btn");
const OutputBox = document.querySelector("#output-box");


function compareValues (sum,LuckyNumber) {
    if ( sum % LuckyNumber ===0){
       OutputBox.innerText="Your birthday is Lucky 😊 ✌";
    } else {
       OutputBox.innerText="Your Birthday is not lucky 😢";
    }
}

function CheckBirthdayIsLucky (){
     const Bdate = BirthDate.value ;
     const sum = CalculateSum(Bdate);
     compareValues (sum,LuckyNumber.value)
     
}



function CalculateSum (Bdate){
        Bdate = Bdate.replaceAll("-","");
        let sum=0;

    
       for( let i=0; i<Bdate.length; i++)
       {
            sum = sum + Number(Bdate.charAt(i));

       } 

       return sum;
}    



CheckNumButton.addEventListener('click',CheckBirthdayIsLucky)
//     console.log(BirthDate.value, LuckyNumber.value)
// })

