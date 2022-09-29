// log from 0 to 100

/*let count = 0

while(count <= 100) {
    console.log(count);
    count++; //++ takes the variable and increases it by 1
} */

for(let i =0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("Foobar");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else if (i % 3 === 0) {
        console.log ("Foo");
    } else {
        console.log (i);
    }
}