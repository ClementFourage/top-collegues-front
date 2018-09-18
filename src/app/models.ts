export enum Avis {
    AIMER = "Aimer", 
    DETESTER= "Detester"
};

export class Collegue {
   
    pseudo:string;
    score:number;
    img:string;  

    constructor(pseudo, score, img){
        this.pseudo = pseudo;
        this.score = score;
        this.img = img;
    }

}

export class Vote {

    collegue:Collegue;
    avis:Avis;
    
    constructor(avis, collegue) {
        this.avis = avis;
        this.collegue = collegue;
    }
}