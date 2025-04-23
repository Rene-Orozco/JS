function test(){
    console.log(a); // 1 todos

    console.log(foo()); // 2L, 2S, NaNC
    
    var a = 1;
    function foo(){
        return (2);
    }

    console.log(a); // 1todos
}


// console.log(a); // undefineC, 2L

test();