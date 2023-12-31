import React from "react";
import { config } from "../../game";

export const GameComponent = () => {
    const [game, setGame] = React.useState<Phaser.Game | null>(null);

    React.useEffect(() => {
        const game = new Phaser.Game(config);

        setGame(game);

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="phaser-container" />;
};
