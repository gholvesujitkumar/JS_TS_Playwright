let tests=["login","search","checkin","checkout"];

    for (let i=0; i <tests.length ; i++)
    {
        console.log(i,tests[i]);
    }

    console.log("--------------------------");

    for(let index=0; index<tests.length; index++)
    {
        const element=tests[index];
        console.log(element);
    } 
    

    for (let test of tests)
    {
        console.log(test); //values
    }
    console.log("_____");

    console.log("------------------------------");

    //for Each loop (no return values)

    tests.forEach((test, index) => {

        console.log('${index}: ${test}');

    })