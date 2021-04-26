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
     * Title: newTransactions
     * Description: Where we will hold all of the new transactions that are created before they are placed into a block
     * (in mine?)
     */
    this.newTransactions = [];
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
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    //to clear out this entire new transactions array so we can start over for the next block
    this.newTransactions = [];
    //takes the new block created and pushes it into the chain and adds it to the this.chain above (L.15)
    this.chain.push(newBlock);

    //returns the new block created
    return newBlock;
}


