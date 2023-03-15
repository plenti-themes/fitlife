<script>
    export let title, subtitle, items;
</script>

<section class="section blog" id="blog" aria-label="blog">
  <div class="container">

    <p class="section-subtitle">{subtitle}</p>

    <h2 class="h2 section-title text-center">{title}</h2>

    <ul class="blog-list has-scrollbar">
      {#each items as item}
      <li class="scrollbar-item">
        <div class="blog-card">

          <div class="card-banner img-holder" style="--width: 440; --height: 270;">
            <img src="{item.image.url}" width="440" height="270" loading="lazy"
              alt="{item.image.alt}" class="img-cover">

            <time class="card-meta" datetime="2022-07-07">{item.date}</time>
          </div>

          <div class="card-content">

            <h3 class="h3">
              <a href="{item.blog.url}" class="card-title">{item.blog.title}</a>
            </h3>

            <p class="card-text">
              {item.blog.body}
            </p>

            <a href="{item.link.url}" class="btn-link has-before">{item.link.title}</a>

          </div>

        </div>
      </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .blog .section-subtitle { margin-inline: auto; }

  .blog-card {
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    border-radius: var(--radius-10);
    height: 100%;
    overflow: hidden;
  }

  .blog-card .card-banner { position: relative; }

  .blog-card .card-banner img { transition: var(--transition-2); }

  .blog-card:is(:hover, :focus) .card-banner img {
    transform: scale(1.1);
  }

  .blog-card .card-meta {
    background-color: var(--coquelicot);
    color: var(--white);
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 8px 20px;
    font-size: var(--fs-6);
    font-weight: var(--fw-500);
    text-transform: uppercase;
  }

  .blog-card .card-content { padding: 25px; }

  .blog-card .card-title { transition: var(--transition-1); }

  .blog-card .card-title:is(:hover, :focus) { color: var(--coquelicot); }

  .blog-card .card-text {
    font-size: var(--fs-6);
    margin-block: 8px 12px;
  }

  .blog-card .btn-link { --color: var(--coquelicot); }

  .blog-card .btn-link:is(:hover, :focus) { --color: var(--rich-black-fogra-29-1); }

  @media (min-width: 1200px) {
    :is(.blog-card) .card-content { padding: 30px; }

    .blog-card .card-meta { padding: 15px 30px; }
  }
</style>