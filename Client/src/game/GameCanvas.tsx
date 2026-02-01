import { useEffect, useRef } from "react";
import Phaser from "phaser";
import {BoardScene} from "./scenes/BoardScene";
import './GameCanvas.css';

export function GameCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(!containerRef.current) return;

        const game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 1000,
            height: 700,
            parent: containerRef.current,
            scene: [BoardScene],
            backgroundColor: "#ffffff"
        });

        return ()=>{
            game.destroy(true);
        };
    }, []);

    return <div ref={containerRef} className="GameCanvas" />;
}