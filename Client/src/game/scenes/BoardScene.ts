import Phaser from "phaser";

export class BoardScene extends Phaser.Scene{
    constructor(){
        super("BoardScene");
    }

    create(){
        this.add.text(400,50, "Islamic codenames", {
            fontSize: "32px",
            color: "#000000"
        }).setOrigin(0.25);
    }

    createBoard(words: String[]){

    }

    createCard(x: number, y: number, word: string){
        const bg = this.add.rectangle(0,0,140,80, 0xc3a120).setStrokeStyle(2, 0x333333);

        const text = this.add.text(0,0, word);
    }

    revealCard(card: Phaser.GameObjects.Container){
        
    }
}