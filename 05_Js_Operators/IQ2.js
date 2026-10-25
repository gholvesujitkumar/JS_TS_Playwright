let isCI=true;

let browsermode=isCI==true ? "headless" : "headed";

console.log("lunching browser in",browsermode); //headless