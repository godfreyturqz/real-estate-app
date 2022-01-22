import SHA256 from 'crypto-js/sha256'

export class Block {
    hash: string

    constructor(
        public index: number,
        public timeStamp: string,
        public data: string,
        public previousHash: string = ''
    ){
        this.hash = this.calculateHash()
    }

    calculateHash(this: Block){
        return SHA256(this.index + this.timeStamp + JSON.stringify(this.data)).toString()
    }
}

export class Blockchain {

    chain: Block[]

    constructor(){
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock(){
        return new Block(0, '0', 'Genesis block', '0')
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock: Block){
        newBlock.index = this.chain.length + 1
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

    isChainValid(){
        for (let index = 1; index < this.chain.length; index++) {
            const currentBlock = this.chain[index]
            const previousBlock = this.chain[index - 1]

            if (currentBlock.hash !== currentBlock.calculateHash()) return false
            if (currentBlock.previousHash !== previousBlock.hash) return false
        }

        return true
    }
}

let chainedData = new Blockchain()
chainedData.addBlock(new Block(
    1,
    Date.now().toString(),
    'data: { name: godfrey, age: 29 }'
))


export const testBlockchain = () => {
    console.log(JSON.stringify(chainedData, null, 4)) 
}

