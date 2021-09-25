// https://oj.masaischool.com/contest/1960/problem/02
function  newSortingAlgo(N,K,arr){
  
  for(i=0;i<N;i++){
  
    
    for(var j=0;j<N-i-1;j++){
      
      if(arr[j]%K>arr[j+1]%K){
        
        temp=arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp;
        
        
        
        
      }
    }
   
        
        
     
  }
        
    console.log(arr.join(" "));
  }
 
  
   

    
  

        
  






function runProgram(input) {
    // Write code here
  input=input.trim().split('\n')
 var [N,K]=input[0].trim().split(" ").map(Number);
    
     
  //var K=input[1].trim().split(" ").map(Number);
  
var arr=input[1].trim().split(" ").map(Number);
  
  
  
  newSortingAlgo(N,K,arr);
  
   
  }
  if (process.env.USERNAME === "talib") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
