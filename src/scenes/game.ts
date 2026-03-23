import { GAME_HEIGHT, GAME_WIDTH } from '@/config';
import { add } from '@/logic';

export class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene');
	}

	create() {
		const cx = GAME_WIDTH / 2;
		const cy = GAME_HEIGHT / 2;

		const a = Math.floor(Math.random() * 10);
		const b = Math.floor(Math.random() * 10);
		const result = add(a, b);

		this.add.text(cx, cy, `Adding ${a} + ${b} = ${result}`).setOrigin(0.5);

		const btnY = GAME_HEIGHT - 130;

		// Button background
		const btnBg = this.add.graphics();
		btnBg.fillStyle(0xffffff, 1);
		btnBg.fillRoundedRect(-90, -28, 180, 56, 28);
		btnBg.setPosition(cx, btnY);

		this.add
			.text(cx, btnY, 'MENU', {
				fontFamily: '"Bebas Neue", sans-serif',
				fontSize: '32px',
				color: '#0d0d1f',
				letterSpacing: 4,
			})
			.setOrigin(0.5)
			.setPadding(44, 16)
			.setInteractive({ cursor: 'pointer' })
			.on('pointerdown', () => {
				this.scene.start('MenuScene');
			});
	}
}
