const nums = [1,2,3,4,5,6,7];
const k = 3;
function arrayRotation(arr, numberofshifts){
   for(let i = 0 ; i < numberofshifts;i++){
     arr.unshift(arr.pop());
     console.log(`step ${i +i}:`,arr);
   }
}
console.log("final output:", arrayRotation(nums,k));
