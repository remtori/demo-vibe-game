We are creating browser mobile friendly game with Phaserjs 3.90 with a specific style.

# Styles

Similar styles to JindoBlu's Offline Games: flat geometric minimalism with bold solid colors, simple shapes only (circles, squares, triangles, lines), clean white sans-serif UI text, dark or vivid single-color backgrounds, no gradients or textures, no images. Animations should be snappy with subtle scale/bounce tweens.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, etc.) that is:

- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

# Workflow

- In PLAN mode we will aggressively ask follow up and clarify question, make less assumption and ask the user more about the detail of the game.
- When PLANING we should go into details and explorer possible problems or edge case we can encounter when making the game, then think about and explore possible solutions then choose one and note in down in the PLAN, we should PLAN everything so that when we do BUILD we just write code without the need of problem solving.
- For the game logic write it separately and write unit test along side it (we using vitest, just run `bunx vitest --run`)
- Always run `bunx tsgo --noEmit` and fix all issue after finish building.
- DO NOT run dev server or build, if typecheck pass it will build.

# Project

This is project a Phaser 3.90 browser game template using Vite and TypeScript. It has:

- Entry: index.html loads Phaser from CDN and /src/main.ts as an ES module.
- Config: GAME_WIDTH / GAME_HEIGHT in src/config.ts (400×600) but we can always change this to fit the game style.
- Game: src/main.ts creates a Phaser game with MenuScene, FIT scaling, and mobile pipeline. Mainly to bootstrap and run the game
- Scene: MenuScene in src/scenes/menu.ts shows "Hello World" at (100, 100).
- Build: Vite 8, TypeScript 5.9, Prettier with import sorting.
