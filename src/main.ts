import { GAME_HEIGHT, GAME_WIDTH } from './config';
import { GameScene } from './scenes/game';
import { MenuScene } from './scenes/menu';

// BOOT
new Phaser.Game({
	type: Phaser.AUTO,
	width: GAME_WIDTH,
	height: GAME_HEIGHT,
	backgroundColor: '#0f0e17',
	parent: 'root',
	scene: [MenuScene, GameScene],
	physics: {
		default: 'arcade',
		arcade: {
			debug: false,
		},
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	render: {
		antialias: true,
		roundPixels: true,
		autoMobilePipeline: true,
	},
});
