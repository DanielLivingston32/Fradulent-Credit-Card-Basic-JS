// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr){
  let n = arr.length;
  let i;
  if(n%2==0){
    i = 0;
  }
  else{
    i = 1;
  }
  let sum = 0;
  for(i;i<arr.length;i+=2){
    let temp = arr[i]*2;
    temp = (temp>9)? temp-9: temp;
    sum+=temp;
    if(i===0){
      continue;
    }
    else{
      sum+=arr[i-1];
    }
  }
  //console.log(sum)
  if((sum+arr[arr.length-1]) % 10 === 0){
    return true;
  }
  return false;
}


function findInvalidCards(Nested_arr){
  let Invalid_list = [];
  for(let i = 0 ; i < Nested_arr.length ; i++){
    if(validateCred(Nested_arr[i])){
      continue;
    }else{
      Invalid_list.push(Nested_arr[i]);
    }
  }
  return Invalid_list;
}


function idInvalidCompanies(Invalid_list){
  let company_name = [];
  for(let i = 0 ; i < Invalid_list.length ; i++){
    let no = Invalid_list[i][0];
    let temp;
    if(no === 3){
      temp = " Amex (American Express)";
    }
    else if(no === 4){
      temp = " Visa"
    }
    else if(no === 5){
      temp = " Mastercard";
    }
    else if(no === 6){
      temp = " Discover";
    }
    else{
      temp = " Company not found";
    }

    if(!(company_name.includes(temp))){
        company_name.push(temp);
        }
  }
  return company_name;
}

let Invalid_card_no = findInvalidCards(batch);
let Fraud_no_companies = idInvalidCompanies(Invalid_card_no);
console.log(`The fraud credit card no's belong to the following companies : ${Fraud_no_companies}`);