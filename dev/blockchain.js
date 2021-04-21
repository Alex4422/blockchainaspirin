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