var Q=require("q");

var find=function(num)
{
    console.log("called")
    if(num%2==0){
        return "EVEN";
    }
    else{
              throw  new Error("ODD ERROR")
    }

}

function oddOrEven(num){
   setTimeout(function () {
       console.log("TIME OUT")
   },1000)

    return Q.fcall(num,10)
}
oddOrEven(find).then(function(res,err){
    if(res)
            console.log(res)
    else
        console.log(err)
})
console.log("END")