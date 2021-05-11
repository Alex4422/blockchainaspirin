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

console.log(bitcoin.chain[2]);