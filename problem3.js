let side1 = 20
let side2 = 20
let side3 = 20
let s = (side1+side2+side3)/2
console.log(s)
let s1 = s*(s-side1)*(s-side2)*(s-side3)
let area = Math.sqrt(s1)
console.log(area)