//for income
function getIncomeValue(){
    const incomeText=document.getElementById('income');
    const income=parseFloat(incomeText.value);
    const incomeError=document.getElementById("income-notify");
    if(isNaN(income)||income<1){
        incomeError.style.display='block';
    }
    return income;
}
//for expenses
function getExpenseValue(expenseId){
    const expenseText=document.getElementById(expenseId)
    const expense=parseFloat(expenseText.value);
    return expense;
}
//for total expense
function expenseTotalValue(id){
  
    //for food
    const food=getExpenseValue('food');
    //food error message
    const foodError=document.getElementById('food-notify');
    if(isNaN(food)||food<1){
        foodError.style.display='block';
    }
    //for rent
    const rent=getExpenseValue('rent');
     //rent error message
     const rentError=document.getElementById('rent-notify');
     if(isNaN(rent)||rent<1){
         rentError.style.display='block';
         
     }
    //for clothes
    const cloth=getExpenseValue('cloth');
     //cloth error message
     const clothError=document.getElementById('cloth-notify');
     if(isNaN(cloth)||cloth<1){
         clothError.style.display='block';
      
     }
    //total expense
    const result=food+rent+cloth;
      //total
    const total=document.getElementById(id);
    total.innerText=result;
    return result;

}
//for balance
function updateBalance(id){
    const income=getIncomeValue();
    const result=expenseTotalValue('total');
    //error message, if income is less than expenses
    if(income>result){
        const left=income-result;
        const balance=document.getElementById(id);
        balance.innerText=left;
    }
    else{
        const expenseError=document.getElementById('expense-notify');
        expenseError.style.display='block';
        
       
    }
    const balanceTotal=balance.innerText;
    return balanceTotal;

}
// for calculate button
document .getElementById("calculate-btn").addEventListener('click',function(){
    //for income
    const income=getIncomeValue();
    //Balance
    updateBalance('balance');
})


//for save button
document.getElementById("save-btn").addEventListener('click',function(){
    //for income
    const income=getIncomeValue();
    const save=document.getElementById("save");
    const saveError=document.getElementById('save-notify');
    const saveValue=parseInt(save.value);
   
        
    //for save button
    if(income>saveValue){
        const percentage=parseFloat(saveValue/100);
        const savingTotal=income*percentage;
        //Saving amount
        const saveText=document.getElementById("save-amount");
        saveText.innerText=parseFloat(savingTotal);
        const saveTotal=saveText.innerText;
         //total expenses
        const balanceTotal=updateBalance('balance');
        //remaining balance
        const remain=document.getElementById('remain');
        remain.innerText=balanceTotal-saveTotal;
        
        if(balanceTotal<saveTotal){
            const remainError=document.getElementById('remain-notify');
            remainError.style.display='block';

        }
        
        }
    else{
        saveError.style.display='block';
    }
    

})
