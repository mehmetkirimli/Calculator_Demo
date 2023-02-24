function bolme (number1 , number2)
{   
    var result=0;
    if(number1 === undefined)
    {
        return number2;
    }
    else if(number2 === undefined)
    {
        return number1;
    }
    else if( number2 === undefined && number1 === undefined)
    {
        return 0;
    
    }
    else
    {   result = Number((number1 / number2).toFixed(2));
        return result;
    }
}


console.log(bolme(11,3))