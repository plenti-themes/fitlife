<script>
    export let title, subtitle, background, items;
</script>

<section class="section class bg-dark has-bg-image" id="class" aria-label="class" style="background-image: url('{background}')">
  <div class="container">

    <p class="section-subtitle">{subtitle}</p>

    <h2 class="h2 section-title text-center">{title}</h2>

        <ul class="class-list has-scrollbar">
          {#each items as item}
          <li class="scrollbar-item">
            <div class="class-card">

              <figure class="card-banner img-holder" style="--width: 416; --height: 240;">
                <img src="{item.image.url}" width="416" height="240" loading="lazy" alt="{item.image.alt}" class="img-cover">
              </figure>

              <div class="card-content">

                <div class="title-wrapper">
                  <img src="{item.icon.url}" width="52" height="52" aria-hidden="true" alt="item.icon.alt" class="title-icon">

                  <h3 class="h3">
                    <a href="{item.url}" class="card-title">{item.name}</a>
                  </h3>
                </div>

                <p class="card-text">
                  {item.body}
                </p>

                <div class="card-progress">

                  <div class="progress-wrapper">
                    <p class="progress-label">{item.bars.label}</p>

                    <span class="progress-value">{item.bars.percent}%</span>
                  </div>

                  <div class="progress-bg">
                    <div class="progress-bar" style="width: {item.bars.percent}%"></div>
                  </div>

                </div>

              </div>

            </div>
          </li>
        {/each}
      </ul>
  </div>
</section>

<style>
  .class { padding-block-start: calc(var(--section-padding) + 250px); }

  .class .section-subtitle { margin-inline: auto; }

  .class .section-title { color: var(--white); }

  .class-list {
    padding: 0;
    padding-block-end: 30px;
  }

  .class-card {
    background-color: var(--white);
    border-radius: var(--radius-10);
    height: 100%;
    overflow: hidden;
  }

  .class-card .card-banner img { transition: var(--transition-2); }

  .class-card:is(:hover, :focus-within) .card-banner img {
    transform: scale(1.1);
  }

  .class-card .card-content { padding: 24px; }

  .class-card .title-wrapper {
    display: flex;
    align-items: center;
  }

  .class-card .title-icon {
    padding-inline-end: 20px;
    margin-inline-end: 20px;
    min-width: max-content;
    border-inline-end: 1px solid var(--gainsboro);
  }

  .class-card .card-title { transition: var(--transition-1); }

  .class-card .card-title:is(:hover, :focus) { color: var(--coquelicot); }

  .class-card .card-text {
    color: var(--sonic-silver);
    font-size: var(--fs-6);
    margin-block: 16px 12px;
  }

  .class-card .progress-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--ff-catamaran);
    color: var(--rich-black-fogra-29-1);
    font-size: var(--fs-6);
    font-weight: var(--fw-800);
    margin-block-end: 8px;
  }

  .class-card .progress-bg {
    background-color: var(--coquelicot_10);
    border-radius: 50px;
  }

  .class-card .progress-bar {
    background-color: var(--coquelicot);
    height: 10px;
    border-radius: inherit;
  }

  @media (min-width: 1200px) {
    :is(.class-card) .card-content { padding: 30px; }
  }
</style>