import { useRef, useEffect } from "react";
import { Vibrant } from "node-vibrant/browser";

import "./Player.css";

export default function Player() {
    const playerRef = useRef(null);

    useEffect(() => {
        const player = playerRef.current;

        if (!player) { return; }

        Vibrant.from("igor.jpg")
            .getPalette()
            .then((palette) => {
                const color = palette.Muted;
                player.style.background = `linear-gradient(
                    0deg, rgb(20, 20, 20), rgb(${color.r}, ${color.g}, ${color.b})
                )`;
            });
    }, []);

    return (
        <div id="player" ref={playerRef}>
            <img id="player-cover" src="igor.jpg" draggable="false" />
            <div>
                <h1>song</h1>
                <h2>artist</h2>
            </div>
        </div>
    )
}