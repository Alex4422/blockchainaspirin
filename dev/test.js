/**
 * Author: Alex
 * Element: function constructor
 * Title: Blockchain
 * Description:  build the blockchain with the different variables
 * @constructor
 */

//Import the constructor function of blockchain.js into test.js
const Blockchain = require('./blockchain');

/*
const bitcoin = new Blockchain();

bitcoin.createNewBlock(11,'gghhjjjk566','tyyhhhh4455');
bitcoin.createNewBlock(12,'DDFFFF5677GH','DFFFGGG55566');
bitcoin.createNewBlock(13,'HGGHHHHHYU7','HHGGGG778899');

console.log(bitcoin);

console.log('The last block nonce of the blockchain is ' + bitcoin.getLastBlock().nonce);
*/

//We create the blockchain
const bitcoin = new Blockchain();

//We create a new block - the first block
bitcoin.createNewBlock(6787888,'ZEEFFGHGHYJJJJJJ','GGHHJJJHHGGYTY');

//We create a new transaction
bitcoin.createNewTransaction(100,'ALEXEERFFFTTT666','JENYTGHHH666777UHHHHJ');

//We create or mine a new block to set in stone the transaction pending above and so one under...
bitcoin.createNewBlock(123123,'TGGGGGGFDF','FFFFGGGDDF');

bitcoin.createNewTransaction(50,'ALEXEERFFFTTT666','JENYTGHHH666777UHHHHJ');
bitcoin.createNewTransaction(60,'ALEXEERFFFTTT666','JENYTGHHH666777UHHHHJ');
bitcoin.createNewTransaction(70,'ALEXEERFFFTTT666','JENYTGHHH666777UHHHHJ');

//We set in stone the 3 transactions created above
bitcoin.createNewBlock(3444,'EDDFFFFFFVGGGHY','FGGGGBBBHHHHNH');

//console.log(bitcoin.chain[2]);

//We create a new blockchain
const bitcoin2 = new Blockchain();

//We initialise the previousBlockHash parameter
const previousBlockHash = '9987UUUHJJGF567YYJJJUUUJJJJRFGGK';
//We initialise the currentBlockData (is multiple transactions here) parameter
const currentBlockData = [
    {
        amount: 20,
        sender: 'JOEGGHHJJKKJJJKKKJHHRFBBNK',
        recipient:'SANDYGGHHHJHGGHJJJLKJJUKKJ',
    },
    {
        amount: 780,
        sender: 'JOEJJKJHGFGGHJHUUJJ',
        recipient:'SANDYHJJJJIIKHHHJKK',
    },
    {
        amount: 90,
        sender: 'JOEHJJKKLLLJHHHHHH76655459',
        recipient:'SANDYGGGGGTTYYY677888898',
    },
];
//We initialise the nonce parameter
//const nonce = 100;

//We execute the hashBlock function to these three parameters
//console.log(bitcoin2.hashBlock(previousBlockHash, currentBlockData, nonce));

//console.log('The nonce calculated waited is : ' + bitcoin2.proofOfWork(previousBlockHash, currentBlockData));

console.log('The hash which begins with four zero is the following : ' + bitcoin2.hashBlock(previousBlockHash, currentBlockData,81441));