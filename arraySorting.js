let arr =[47,97,46,27,95,75];
for( let i=0; i<arr.length;i++){
    for (let j=0; j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
};
console.log(arr);          //[ 27, 46, 47, 75, 95, 97 ]

/*************************************************************************************** */
let arr1 =[50,70,30,25,90,10];
for( let i=0; i<arr1.length;i++){
    for (let j=i+1; j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            let temp=arr1[i];
            arr1[i]=arr1[j];
            arr1[j]=temp;
        }
    }
};
console.log(arr1);   //[ 10, 25, 30, 50, 70, 90 ]