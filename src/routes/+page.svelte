<div class="landing">
	<div class="landing-content">
		<img src="https://avatars.githubusercontent.com/u/68160575?v=4" alt="Avatar" class="avatar" />
		<h1 class="name">Carson McCue</h1>
		<p class="description">Economics and Computer Science student at Chapman University</p>

		<div class="scroll">
			scroll
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-3 h-3"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</div>
</div>

<section>
	<h2 class="text-primary">Highlighted Projects</h2>
	<div class="project-grid">
		<div class="project">
			<h3 class="project-title">Classic Mario Remake</h3>
			<p class="project-description">
				A nostalgic revival of the classic Mario game, reimagined in a 2D format using C++. This
				project showcases a deep understanding of game development fundamentals, with a focus on
				replicating the iconic gameplay and physics of the original series.
			</p>
		</div>
		<div class="project">
			<h3 class="project-title">PyTorch Vision Exploration</h3>
			<p class="project-description">
				An innovative project leveraging PyTorch to apply cutting-edge computer vision techniques.
				This exploration delves into neural networks and machine learning algorithms to process and
				analyze visual data, pushing the boundaries of AI research.
			</p>
		</div>
		<div class="project">
			<h3 class="project-title">SvelteKit Cloudflare Integration</h3>
			<p class="project-description">
				A pioneering solution that seamlessly integrates SvelteKit with Cloudflare, enhancing web
				applications with improved performance and scalability. This adapter leverages the strengths
				of both platforms, providing developers with the tools to build fast, secure, and efficient
				web experiences.
			</p>
		</div>
	</div>
</section>

<section>
	<h2>Experience</h2>
	<ul class="tech-stack">
		<li>
			<strong>Languages:</strong> HTML, CSS, Javascript & Typescript (expert level), Python, C++, Java
		</li>
		<li>
			<strong>Frontend:</strong> Svelte, React, Tailwind CSS, Bulma CSS, Daisy UI
		</li>
		<li>
			<strong>Backend:</strong> Node.js, Express, MongoDB, Firebase, Cloudflare Workers, Vercel, Supabase,
			Postgres, Redis, BullMQ
		</li>
	</ul>
</section>

<section>
	<h2 class="text-center">Contact</h2>
	<p class="md:text-xl text-center">
		Contact me at carsonem2003@gmail.com or click one of the buttons below to reach me online:
	</p>
	<div class="flex justify-center mt-10">
		<a href="https://github.com/carsonmccue" class="btn btn-primary"> Check out my Github </a>
	</div>
</section>

<style lang="postcss">
	/* Landing */
	.landing {
		@apply grid place-items-center min-h-screen relative;
	}
	.landing > .landing-content {
		@apply text-center tracking-wide;
	}
	.avatar {
		@apply rounded-full w-24 h-24;
	}
	.name {
		@apply text-transparent bg-clip-text font-bold text-4xl md:text-6xl bg-primary to-secondary;
	}
	.description {
		@apply max-w-sm text-base md:text-lg text-black p-4 rounded-lg;
	}
	.scroll {
		@apply absolute flex flex-col  items-center text-center bottom-1 left-[50%] transform -translate-x-[50%] text-sm;
	}

	/* Section generics */
	section {
		@apply py-12 md:py-20 px-4 container mx-auto;
	}
	section > h2 {
		@apply text-3xl md:text-5xl text-primary font-bold mb-4 md:mb-8 tracking-wide;
	}

	/* Projects */
	.project-grid {
		@apply grid grid-cols-1 md:grid-cols-3 gap-8;
	}
	.project > .project-description {
		@apply mb-6 text-lg;
	}
	.project > .project-title {
		@apply text-xl font-bold;
	}

	/* Tech stack */
	.tech-stack {
		@apply text-xl;
	}
	.tech-stack > li {
		@apply mb-4;
	}
</style>
