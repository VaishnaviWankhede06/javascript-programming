
    
this.searchElement=30;
    
        var arr = function(...arrFun)  {
            for(let i=0;i<=arrFun.length;i++){
                if(arrFun[i]===this.searchElement){
                    //console.log(`element ${this.searchElement} found at location ${i}`);
                    return `Element ${this.searchElement} found at location ${i}`;
                    
                }
                
            }
         };
var arrF=[20,30,40,50,60,70];

var result=arr.apply(this,arrF);
console.log(result);
/*********************************************************************************************** */
/*var input=300;
var myArr=[20,30,40,50,60,70]
for(var i=0;i<myArr.length;i++){
    if(input==myArr[i]){
        console.log("element is available");
        break;
    }
}*/

/********************************************************************************** */
/*class SearchArr {
  constructor(searchElement) {
    this.searchElement = searchElement;
  }

   arr(...arrFun){
    for (let i = 0; i < arrFun.length; i++) {
      if (arrFun[i] === this.searchElement) {
        console.log(`Element ${this.searchElement} found at location ${i}`);
        return; 
      }
    }
    console.log("Element not found");
  }
}


const obj = new SearchArr(40);


obj.arr(20, 30, 40, 50, 60);*/