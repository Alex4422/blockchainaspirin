/**
 * Author: Alex
 * Element: function constructor
 * Title: Blockchain
 * Description:  build the blockchain with the different variables
 * @constructor
 */

//Import the constructor function of blockchain.js into test.js
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(11,'gghhjjjk566','tyyhhhh4455');
bitcoin.createNewBlock(12,'DDFFFF5677GH','DFFFGGG55566');
bitcoin.createNewBlock(13,'HGGHHHHHYU7','HHGGGG778899');

//console.log(bitcoin);

console.log('The last block nonce of the blockchain is ' + bitcoin.getLastBlock().nonce);