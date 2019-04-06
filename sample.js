let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let expect = 'begin';
let testCase = 0;
let cnt = 1;
rl.on('line', function(line) {
  if(expect === 'begin') {
    testCase = parseInt(line);
    expect = 'input';
  } else if (expect === 'input') {
    console.log(`Case #${cnt}: ${line}`);
    testCase--;
    cnt++;
  }
  if(testCase === 0) {
    rl.close();
  }
}).on('close',function(){
    process.exit(0);
});