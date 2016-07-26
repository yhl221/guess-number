'use strict';
class AnswerGenerator{
    static checkRandomNumber(){
        let randomNumber=parseInt(Math.random()*(10000-1000)+1000)+'';
        let randomArray=randomNumber.split('');
        return randomArray.every((element,index)=>{
            return element!=randomArray[index+1];
        });
    }
}

module.exports=AnswerGenerator;
