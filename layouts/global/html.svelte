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

  let y;
</script>

<svelte:window bind:scrollY={y}/>

<html lang="en">
  <Head title={content.fields?.meta?.title} />
  <body>
    {#if user && $user.isAuthenticated}
      <svelte:component this={adminMenu} {user} bind:content={content} />
    {/if}
    <Login bind:hash {user} />
    <main>
      <a href="#top" class="back-top-btn{y > 100 ? ' active' : ''}" aria-label="back to top" data-back-top-btn="">
        <ion-icon name="caret-up-sharp" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
      </a>
      <header class="header{y > 100 ? ' active' : ''}" data-header="">
        <div class="container">
            <Nav />
        </div>
      </header>
      <svelte:component this={layout} {...content.fields} {allContent} {allLayouts} {content}/>
      <Footer />
      <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
        <ion-icon name="caret-up-sharp" aria-hidden="true"></ion-icon>
      </a>
    </main>
  </body>
</html>
