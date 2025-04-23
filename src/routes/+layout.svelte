<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import MdCloudDownload from 'svelte-icons/md/MdCloudDownload.svelte';
</script>

<nav>
	<div id="navbar-container">
		<a href="/portfolio">
			<MdCloudDownload /><span>CV</span>
		</a>
	</div>
</nav>	

{@render children()}

<style>
	nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		justify-content: flex-end;

		:global(svg) {
			width: 1rem;
			height: 1rem;
		}
	}

	#navbar-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
</style>
