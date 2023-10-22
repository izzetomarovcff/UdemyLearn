function getAverage(a:number,b: number,c?:number):string{
    let total = a+b;
    let count = 0 ;

    if(typeof c !== 'undefined'){
        total +=c;
        count ++;
    }
    
    const result = total/count
    return 'result : '+ result
}

const getAverage2 = (...a: number[]):string => {
    let total = 0;
    let count = 0;
    for(let i=0; i<a.length; i++){
        total += a[i]
        count++
    }
    const result = total/count
    return 'result : '+ result
}

getAverage(10,20,30)
getAverage(10,20)
getAverage2(10,20)
getAverage2(10,20,30,40,50)