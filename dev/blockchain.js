//We import the library 'sha256' to hash ours blocks with the command "npm i sha256 --save"
const sha256 = require('sha256');

/**
 * Author: Alex
 * Element: function constructor
 * Title: Blockchain
 * Description:  build the blockchain with the different variables
 * @constructor
 */
function Blockchain() {

    /**
     * Element: variable, array
     * Title: chain
     * Description: Where our blockchain will be stored; All of the blocks that we create and that we mine will be stored in this array as a chain
     */
    this.chain = [];
    /**
     * Element: variable, array
     * Title: pendingTransactions
     * Description: Where we will hold all of the new transactions that are created before they are placed into a block
     * IMPORTANT: these transactions are not validated yet to be set in stone in the blockchain.
     */
    this.pendingTransactions = [];
}

/**
 * Author: Alex
 * Element: method
 * Title: createNewBlock
 * Description:
 * @param nonce
 * @param previousBlockHash
 * @param hash
 * @returns {{previousBlockHash, index: number, transactions: [], nonce, hash, timestamp: number}}
 */
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){

    /**
     * @type {{previousBlockHash, index: number, transactions: [], nonce, hash, timestamp: number}}
     * index: number of the block in the blockchain
     * timestamp: when the block was created
     * transactions: inside of this new block, all the transactions, just created or pending, that are waiting to be placed into this block
     * nonce: link with proof of work, can be a number, Nonce, or a "number only used once," refers to the first number a blockchain miner needs to discover before solving for a block in the blockchain.
     * hash: data of the transactions will be converted into a string hash
     * previousBlockHash: hash data of the previous block to this one
     */
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    //to clear out this entire new transactions array so we can start over for the next block
    this.pendingTransactions = [];
    //takes the new block created and pushes it into the chain and adds it to the this.chain above (L.15)
    this.chain.push(newBlock);

    //returns the new block created
    return newBlock;
}

/**
 * Author: Alex
 * Element: method
 * Title: getLastBlock
 * Description: returns the last block of the blockchain
 * @returns {*}
 */
Blockchain.prototype.getLastBlock = function (){
    return this.chain[this.chain.length - 1];
}

/**
 * Author: Alex
 * Element: method
 * Title: createNewTransaction
 * Description: Create a new transaction and put it the array pendingTransactions
 * @param amount: the amount (in euros) of aspirins sent by the sender
 * @param sender: the person who sends the amount to the recipient
 * @param recipient: the person who receives the amount sent by the sender
 * @returns {*}
 */
Blockchain.prototype.createNewTransaction =  function(amount, sender, recipient){

    //structure of the object newTransaction
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    //the new transaction is put in the new pending transactions array, once done, it's not really set in stone
    //yet. The transaction is set in stone once the new block is mined or created.
    this.pendingTransactions.push(newTransaction);

    //return the number of the block that this transaction will be added to
    return this.getLastBlock()['index'] + 1;
}

/**
 * Author: Alex
 * Element: method
 * Title: hashBlock
 * Description: Hash the block with previousBlockHash, currentBlockData, nonce
 * @param previousBlockHash
 * @param currentBlockData
 * @param nonce
 * @returns {[]|string}
 */
Blockchain.prototype.hashBlock = function (previousBlockHash, currentBlockData, nonce) {
    //We concatenate the 3 parameters of the function
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    //We hash the set formed
    const hash = sha256(dataAsString);
    //We return the hash formed
    return hash;
}

/**
 * Author: Alex
 * Element: method
 * Title: proofOfWork
 * Description: Computes the needed nonce to get a hash which begins with four 0
 * @param previousBlockHash
 * @param currentBlockData
 * @returns {number}
 */
Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData) {
    //We use let, here, for nonce because this one will be changing as we move through this method.
    let nonce = 0;
    //We use let, here, for hash because this one will be changing as we move through this method.
    let hash = this.hashBlock(previousBlockHash,currentBlockData, nonce);

    //While the four first figures do not equal with 0, we continue in the while loop
    while (hash.substring(0,4) !== '0000'){
        //We test with a new nonce.
        nonce++;
        //We hash again with a new once
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }

    //Finally, we return the nonce waited
    return nonce;
}

//We need to export the constructor function above in order to test it in test.js
module.exports = Blockchain;
