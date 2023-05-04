
import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    typescript: true
  }),
	// hydrate the <div id="svelte"> element in src/app.html
	package: {
		dir: 'package',
		emitTypes: true
	}
}