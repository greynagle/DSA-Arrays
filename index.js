const memory = require('./memory')
const Array = require('./array')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    console.log(arr);
    // What is the length, capacity and memory address of your array?
    // length 1, capacity 3, address 0

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr)
    // What is the length, capacity and memory address of your array?
    // Length 6, capacity 12, pointer 3. Length is how many have pushed. capacity comes from tripling the capacity once the length rolled over to 12. Pointer's at 3 as a result of the resize, showing the last location before the size change

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr)
  // What is the length, capacity, and address of your array?
  // length 3, capacity 12, pointer 3. Length reduced by use of the pop function. the others remain from the previous answer

  // Print the 1st item in the array arr.
  console.log(arr.get(0))

  // Empty the array and add just 1 item: arr.push("tauhida");

  while(arr.length>0){
    arr.remove(arr.length-1);
  }
  arr.push("tauhida");
  console.log(arr)
  console.log(arr.get(0))
  // returns NaN if I look at the 0th index at pointer 3. I suspect that this new value is at pointer 1, which I can't reach because get doesn't allow negative indeces

  // What is the purpose of the _resize() function in your Array class?
  // Resize exists to carve out a block of memory to allow for consecutive storage of values. This allows for quick data access by trading memory space for speed.
}

main()

// string url

function subSpace(input) {
  let output=[]
  for(i=0; i< input.length; i++){
    if(input[i]===' '){
      output.push('%20')
    }else{
      output.push(input[i])
    }
  }

  console.log(output.join(''))

}

subSpace('tauhida parveen')

function spliceFive(input) {
  let output=[]
  for(i=0; i< input.length; i++){
    if(input[i]>=5){
      output.push(input[i])
    }
  }

  console.log(output)

}

spliceFive([1,9,2,8,3,7,4,6,5,10])