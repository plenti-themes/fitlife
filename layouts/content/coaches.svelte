<script>
    export let name, title, image;
</script>

<section class="coach">
    <h1>{name}</h1>
    <div>{title}</div>
    <div>
        <img src="{image.src}" alt="{image.alt}" />
    </div>
</section>