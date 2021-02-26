class RecentCounter{
    queen:Array<any>
    constructor(){
        this.queen=[]
    }
    ping(t:number):number{
        this.queen.push(t)
        while(this.queen[0]<t-3000){
            this.queen.shift()
        }
        return this.queen.length
    }
}