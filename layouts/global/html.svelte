<script>
  import { onMount } from 'svelte';
  import Footer from './footer.svelte';
  import Head from './head.svelte';
  import Nav from "./nav.svelte";
  import Login from "./login.svelte";

  export let content, layout, allContent, allLayouts, user, adminMenu;
  
  let hash;
  onMount(async () => {
    hash = window.location.hash;
  });
</script>

<html lang="en">
  <Head title={content.fields?.meta?.title} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={adminMenu} {user} bind:content={content} />
    {/if}
    <Login bind:hash {user} />
    <main>
      <Nav />
      <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
      <Footer />
    </main>
  </body>
</html>
