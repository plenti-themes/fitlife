<script>
    export let title, subtitle, body, coach, images, link;
</script>

<section class="section about" id="about" aria-label="about">
  <div class="container">

    <div class="about-banner has-after">
      <img src="{images.banner.url}" width="660" height="648" loading="lazy" alt="{images.banner.alt}" class="w-100">

      <img src="{images.circle1.url}" width="660" height="534" loading="lazy" aria-hidden="true" alt="{images.circle1.alt}" class="circle circle-1">
      <img src="{images.circle2.url}" width="660" height="534" loading="lazy" aria-hidden="true" alt="{images.circle2.alt}" class="circle circle-2">

      <img src="{images.fitness.url}" width="650" height="154" loading="lazy" alt="{images.fitness.alt}" class="abs-img w-100">
    </div>

    <div class="about-content">

      <p class="section-subtitle">{subtitle}</p>

      <h2 class="h2 section-title">{title}</h2>

      {@html body}

      <div class="wrapper">

        <div class="about-coach">

          <figure class="coach-avatar">
            <img 
              src="{coach.image.src}"
              width="65"
              height="65"
              loading="lazy"
              alt="{coach.image.alt}"
            >
          </figure>

          <div>
            <h3 class="h3 coach-name">{coach.name}</h3>

            <p class="coach-title">{coach.title}</p>
          </div>

        </div>

        <a href="{link.url}" class="btn btn-primary">{link.title}</a>

      </div>

    </div>

  </div>
</section>

<style>
  .about { overflow: hidden; }

  .about-banner { margin-block-end: 50px; }

  .about-banner::after {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: var(--coquelicot);
    border-radius: var(--radius-10);
    z-index: -2;
  }

  .about-banner .abs-img {
    bottom: 0;
    left: 0;
    z-index: -1;
    animation: moveUp 2.5s ease infinite;
  }

  .about-content :global(ul li) {
    list-style: circle;
  }

  .about-content :global(ol li) {
    list-style: decimal;
  }

  @keyframes moveUp {
    0%,
    30%,
    60%,
    100% { transform: translateY(0); }

    20% { transform: translateY(-30px); }

    40% { transform: translateY(-15px); }
  }

  .about .section-text:not(:last-of-type) { margin-block-end: 15px; }

  .about .wrapper { margin-block-start: 30px; }

  .about-coach {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-block-end: 30px;
  }

  .about .coach-avatar {
    margin: 0;
    overflow: hidden;
    border-radius: 50%;
    min-width: 65px;
  }

  .about .coach-name {
    font-weight: var(--fw-700);
    margin-block-end: 5px;
  }

  .about .coach-title { font-size: var(--fs-6); }

  .about .btn-primary:is(:hover, :focus) {
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    box-shadow: none;
  }

  @media (min-width: 575px) {
    .about .wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
    }

    .about-coach { margin-block-end: 0; }
  }

  @media (min-width: 992px) {
    .about .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 50px;
    }

    .about-banner { margin-block-end: 0; }

    .about .wrapper { gap: 30px; }
  }
  
  @media (min-width: 1200px) {
    .about .wrapper { gap: 40px; }
  }

</style>