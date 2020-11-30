// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
const order = (words) => words.split(' ').sort((a, b) => (parseInt(a.replace(/\D/g, '')) > parseInt(b.replace(/\D/g, ''))) ? 1 : -1).join(" ");
 
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order("is2 Thi1s T4est 3a"));

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str){
   const text = str.toLowerCase();
   const newArray = [];
   for (let i = 1; i <= text.length; i++) {
       if (!(text.substring(i - 1, i) === " "))
        newArray.push(text.substring(0, i - 1).toLowerCase() + text.substring(i - 1, i).toUpperCase() + text.substring(i, str.length).toLowerCase())
    };
    return newArray;
};
console.log(wave(" gap ")); 