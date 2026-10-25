let environment="staging";
let baseUrl=environment=="staging" ? "https://staging.example.com" : "https://production.example.com";
console.log(baseUrl); //https://staging.example.com