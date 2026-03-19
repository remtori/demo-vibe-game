import { GAME_HEIGHT, GAME_WIDTH } from '@/config';

export class MenuScene extends Phaser.Scene {
	constructor() {
		super('MenuScene');
	}

	create() {
		const cx = GAME_WIDTH / 2;
		const btnY = GAME_HEIGHT - 130;

		// Button background
		const btnBg = this.add.graphics();
		btnBg.fillStyle(0xffffff, 1);
		btnBg.fillRoundedRect(-90, -28, 180, 56, 28);
		btnBg.setPosition(cx, btnY);

		this.add
			.text(cx, btnY, 'PLAY', {
				fontFamily: '"Bebas Neue", sans-serif',
				fontSize: '32px',
				color: '#0d0d1f',
				letterSpacing: 4,
			})
			.setOrigin(0.5)
			.setPadding(44, 16)
			.setInteractive({ cursor: 'pointer' })
			.on('pointerdown', () => {
				this.scene.start('GameScene');
			});
	}
}
