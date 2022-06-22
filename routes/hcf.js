const minSquares = (a, b) => {
    for (let i = 1; i <= a && i <= b; i++) {

        // check if is factor of both integers
        if( a % i == 0 && b % i == 0) {
            const hcf = i;
        }
    };
    let c = a / hcf;
    let d = b / hcf;
    let mini = c * d;
    return mini;
}