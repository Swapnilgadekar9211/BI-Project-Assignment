const month=prompt("enter the month")
const year=prompt("enter the year")
if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
    console.log("Number of days is 31");
}
else if ((month==2)&&((year%400==0)||(year%4==0 && year%100!=0))){
    console.log("Number of days is 29");
}
else if(month==2){
    console.log("Number of days is 28");
}
else
console.log("Number of days is 30");