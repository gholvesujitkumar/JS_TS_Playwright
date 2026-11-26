let browser=['chroma','opera','firefox','safari'];

// browser.shift("chroma","opera");

console.log(browser.length);

browser.pop();
console.log(browser);

let removed=browser.shift();

console.log(removed);
console.log(browser);

for(let i=0;i<browser.length;i++)
{
    console.log(browser[i]);
    if (browser[i]=="opera")
    {
        console.log("opera doesnot support automation now ");
        
    }
}

