let responseTime=850;
let sla=1000;

let slaStatus=responseTime<=sla ? "within SLA" : "outside SLA";
console.log(`Response : ${responseTime}ms is ${slaStatus}`); //Response  : 850ms is within SLA

//Template Literals is used to replace the values 
console.log(`Response : ${responseTime}ms is ${slaStatus}`); //Response  : 850ms is within SLA
console.log(` whats the response time ?: ${slaStatus}`); // whats the response time ?: within SLA