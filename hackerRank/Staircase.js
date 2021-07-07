// My solution
function staircase(n) {
    // Write your code here
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 1; j <= n - i; j++) {
            str += ' ';
        }
        for(let j = 1; j <= i; j++) {
            str += '#';
        }
        console.log(str);
    }
}

// From others solutions
function stairCase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

function staircase(n) {
    for(let i=0;i<n;i++){
        console.log(" ".repeat(n-i-1) + "#".repeat(i+1));
    }
}
