<script>
    export let title, tabs, body, link, image, circles, heartrate, calories, background;
</script>

<section class="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section="" style="background-image: url('{background}')">
  <div class="container">

    <div class="hero-content">

      <p class="hero-subtitle">
        {#each tabs as tab, i}
          {#if i === 0}
            <strong class="strong">{tab}</strong>
          {:else}
            {tab}
          {/if}
        {/each}
      </p>

      <h1 class="h1 hero-title">{title}</h1>

      <p class="section-text">
        {body}
      </p>

      <a href="{link.url}" class="btn btn-primary">{link.title}</a>

    </div>

    <div class="hero-banner">

      <img src="{image.url}" width="660" height="753" alt="{image.alt}" class="w-100">

      {#each circles as circle}
        <img src="{circle}" alt="" width="666" height="666" aria-hidden="true" class="circle circle-1">
      {/each}

      <img src="{heartrate.url}" width="255" height="270" alt="{heartrate.alt}" class="abs-img abs-img-1">
      <img src="{calories.url}" width="348" height="224" alt="{calories.alt}" class="abs-img abs-img-2">

    </div>
  </div>
</section>

<style>
  .hero {
    color: var(--cadet-gray);
    text-align: center;
    padding-block-start: calc(var(--section-padding) + 80px);
    padding-block-end: 0;
    overflow: hidden;
  }

  .hero::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 240px;
    background-color: var(--coquelicot);
    z-index: -1;
  }

  .hero-content { margin-block-end: 90px; }

  .hero-subtitle {
    background-color: var(--white_10);
    color: var(--white);
    margin-inline: auto;
    padding: 5px;
    padding-inline-end: 15px;
    border-radius: var(--radius-8);
  }

  .hero-subtitle .strong {
    display: inline-block;
    background-color: var(--coquelicot);
    padding: 2px 15px;
    margin-inline-end: 15px;
    border-radius: var(--radius-5);
  }

  .hero-title { margin-block: 30px 8px; }

  .hero .section-text { margin-block-end: 40px; }

  .hero .btn { margin-inline: auto; }

  .hero-banner { position: relative; }

  .abs-img-1 {
    top: 20px;
    right: -50px;
    width: 190px;
  }

  .abs-img-2 {
    bottom: -50px;
    left: -40px;
    width: 280px;
  }

  .hero .abs-img { animation: move 3s linear infinite alternate; }

  @keyframes move {
    0% { transform: translate(0, 0); }
    50% { transform: translate(-5px, 10px); }
    100% { transform: translate(5px, 20px); }
  }

  .hero .abs-img-2 { animation-direction: alternate-reverse; }
  @media (min-width: 575px) {
    .hero-subtitle { font-size: var(--fs-5); }

    .hero-content { padding-inline: 40px; }

    .hero-subtitle .strong { padding-block: 6px; }

    .hero::after { height: 340px; }

    .abs-img-1 {
      top: 130px;
      right: -10px;
      width: 230px;
    }

    .abs-img-2 {
      bottom: 20px;
      left: -40px;
      width: 310px;
    }
  }
  @media (min-width: 768px) {
    .hero-banner {
      max-width: max-content;
      margin-inline: auto;
    }

    .abs-img-1 {
      top: 140px;
      right: 50px;
    }
  }
  @media (min-width: 992px) {
    .hero {
      background-size: contain;
      text-align: left;
    }

    .hero::before {
      content: "";
      position: absolute;
      top: -1000px;
      left: -500px;
      width: 1500px;
      height: 1500px;
      background-image: radial-gradient(circle, var(--coquelicot_20) 20%, transparent 70% 100%);
      z-index: -1;
    }

    .hero .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 25px;
    }

    .hero-content {
      padding-inline: 0;
      margin-block-end: 0;
    }

    .hero-subtitle,
    .hero .btn {margin-inline: 0;}

    .hero::after {
      width: 330px;
      height: 100%;
      left: auto;
      right: 0;
    }
  }
  @media (min-width: 1200px) {
    .hero::after { width: 420px; }

    .hero .section-text { --fs-6: 1.8rem; }

    .abs-img-1 {
      top: 170px;
      right: -30px;
      width: 260px;
    }

    .abs-img-2 {
      bottom: 60px;
      left: -80px;
      width: 360px;
    }
  }
</style>