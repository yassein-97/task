export class Quiz {
    constructor(category , diffculty , amount){
        this.category=category
        this.diffculty=diffculty
        this.amount=amount
        this.score=0
    }
    async getQuizQuestion(){
            let response = await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.diffculty}`);
            let data = await response.json()
            console.log(data.results);
            return data.results
    }
}
