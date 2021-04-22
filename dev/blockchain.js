/**
 *
 * @constructor
 */
function Blockchain() {

    /**
     * Where our blockchain will be stored; All of the blocks that we create and that we mine will be stored in this array as a chain
     */
    this.chain = [];
    /**
     * Where we will hold all of the new transactions that are created before they are placed into a block
     * (in mine?)
     */
    this.newTransactions = [];
}

/**
 *
 * @param nonce
 * @param previousBlockHash
 * @param hash
 * @returns {{previousBlockHash, index: number, transactions: [], nonce, hash, timestamp: number}}
 */
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){

    /**
     *
     * @type {{previousBlockHash, index: number, transactions: [], nonce, hash, timestamp: number}}
     */
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash
    };

    //
    this.newTransactions = [];
    this.chain.push(newBlock);

    //
    return newBlock;
}


