let p = 28;
let q = 0;

for (let i = 1; i < p; i++) {
    if (p % i == 0)
        q += i;
}

if (q == p)
    console.log("Perfect Number");
else
    console.log("Not Perfect");