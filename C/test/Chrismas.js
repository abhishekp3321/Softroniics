let n=3
let repeat=3
{
    for( let r=1; r<=repeat; r++)

for (let i = 1; i <= n; i++)
{

let spaces = ' '.repeat(n - i);

let stars = '*'.repeat(2 * i - 1);

    console.log(spaces + stars);
    }
    for (let i = 0; i > n/2; i++) {
        console.log(' ');   
    }
        for (let i = 0; i < n; i++) {
            console.log('* *');
        }

        }