<script>
    export let title, link, image;
</script>

<section class="section video" aria-label="video">
  <div class="container">

    <div class="video-card has-before has-bg-image" style="background-image: url('{image.url}')">

      <h2 class="h2 card-title">{title}</h2>

      <button class="play-btn" aria-label="play video">
        <ion-icon name="play-sharp" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
      </button>

      <a href="{link.url}" class="btn-link has-before">{link.title}</a>

    </div>

  </div>
</section>

<style>
  .video {
    padding-block: 0;
    margin-block-end: -250px;
  }

  .video-card {
    background-color: var(--light-gray);
    background-size: cover;
    background-position: center;
    height: 500px;
    border-radius: var(--radius-10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .video-card::before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--rich-black-fogra-29_50);
    z-index: -1;
  }

  .video-card .card-title {
    color: var(--white);
    font-size: var(--fs-3);
  }

  .play-btn {
    background-color: var(--coquelicot);
    color: var(--white);
    width: max-content;
    font-size: 30px;
    padding: 25px;
    border-radius: 50%;
    margin-block: 25px 35px;
    animation: pulse 2s ease infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 var(--coquelicot); }
    100% { box-shadow: 0 0 0 40px transparent; }
  }

  @media (min-width: 575px) {
    .video-card .card-title { --fs-3: 3.5rem; }
  }
</style>