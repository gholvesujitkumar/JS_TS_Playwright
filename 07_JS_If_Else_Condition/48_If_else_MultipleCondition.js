//Problem  statements
//score-->90-->A Grade
//score-->80 to 90--> B Grade
//score-->70 to 80--> c Grade
//score-->60 to 70--> d Grade
//score-->50 to 60--> e Grade
//score-->1 to 50 --> F Grade
//use the if else nested loop 

let score=-59;

if(score>100 && score <0){
    console.log("invalid score ");
}else{
 //   


if(score >= 90){
    console.log("Grade A-with Excellance");
}else if(score >=80 && score<90)
    {
    console.log("Grade-B Very Good");
}else if(score >=70 && score <80)
    {
    console.log("Grade-c Good");
}else if(score>=60 && score <70)
    {
    console.log("Grade-d average");
}else if(score>=50 && score <60)
    {
    console.log("need improvemnt");
}else
    {
     console.log("fail")
    }   
}