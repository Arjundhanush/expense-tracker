let income=document.querySelector("#incomedollar");
let expense=document.querySelector("#expensedollar");
let total=document.querySelector("#balancedollar");
let transactionlist=document.querySelector("#trasactionhistory");
//money=Number(document.querySelector("#moneytaker").value)
let button=document.querySelector("#button");
button.addEventListener("click",()=>{
    let text=document.getElementById('texttaker').value;
let money=Number(document.querySelector("#moneytaker").value);
let anchor=document.createElement("button");
anchor.innerText='x';
anchor.style.backgroundColor="red";
anchor.style.display="inline";
let el=document.createElement("li");
el.style.display="flex";
 el.innerText=money +"\n"+text;
    if(money>0){
    income.innerText=Number(income.innerText)+Number(money);
    
    
    (transactionlist.append(el));
    el.prepend(anchor);
}
    else{
        expense.innerText=Number(expense.innerText)+Number(money);
       
        

        transactionlist.append(el);
        el.prepend(anchor);
    }
    total.innerText=Number(total.innerText)+Number(money);
    anchor.addEventListener("click",()=>{
       el.remove();
    })
})
