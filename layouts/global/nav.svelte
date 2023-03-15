<script>
  let y, navActive;

  const toggleMenu = () => {
    navActive = !navActive;
  }

  const scroll = e => {
    document.getElementById(e.target.hash.substring(1)).scrollIntoView();
  }
</script>

<svelte:window bind:scrollY={y}/>

<header class="header{y > 100 ? ' active' : ''}" data-header="">
  <div class="container">
    <a href="." class="logo">
      <ion-icon name="barbell-sharp" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
      <span class="span">Fitlife</span>
    </a>
    <nav class="navbar {navActive ? ' active' : ''} {y > 20 ? ' sticky' : ''}" on:click={toggleMenu} data-navbar="">
      <button class="nav-close-btn" aria-label="close menu" data-nav-toggler="">
        <ion-icon name="close-sharp" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
      </button>
      <ul class="navbar-list">
        <li>
          <a on:click|preventDefault={e => scroll(e)} href="#home" class="navbar-link" data-nav-link="">Home</a>
        </li>
        <li>
          <a on:click|preventDefault={e => scroll(e)} href="#about" class="navbar-link" data-nav-link="">About Us</a>
        </li>
        <li>
          <a on:click|preventDefault={e => scroll(e)} href="#class" class="navbar-link" data-nav-link="">Classes</a>
        </li>
        <li>
          <a on:click|preventDefault={e => scroll(e)} href="#blog" class="navbar-link" data-nav-link="">Blog</a>
        </li>
        <li>
          <a on:click|preventDefault={e => scroll(e)} href="." class="navbar-link" data-nav-link="">Contact Us</a>
        </li>
      </ul>
    </nav>
    <a href="." class="btn btn-secondary">Join Now</a>
    <button class="nav-open-btn" on:click={toggleMenu} aria-label="open menu" data-nav-toggler="{navActive ? ' active' : ''}">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
  </div>
</header>

<a href="#top" class="back-top-btn{y > 100 ? ' active' : ''}" aria-label="back to top" data-back-top-btn="">
  <ion-icon name="caret-up-sharp" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
</a>

<style>
  .header .btn { display: none; }

  .header {
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-block: 10px;
    box-shadow: var(--shadow-1);
    z-index: 4;
  }

  .header > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: var(--rich-black-fogra-29-1);
    font-family: var(--ff-catamaran);
    font-size: 3.5rem;
    font-weight: var(--fw-900);
    display: flex;
    align-items: center;
    margin-inline-start: -8px;
  }

  .logo ion-icon {
    color: var(--coquelicot);
    font-size: 40px;
    transform: rotate(90deg) translate(-2px, -5px);
  }

  .nav-open-btn {
    background-color: var(--coquelicot);
    padding: 20px 15px;
    border-radius: var(--radius-8);
  }

  .nav-open-btn .line {
    background-color: var(--white);
    width: 30px;
    height: 3px;
  }

  .nav-open-btn .line:not(:last-child) { margin-block-end: 6px; }

  .nav-open-btn .line:nth-child(2) {
    width: 25px;
    margin-inline-start: auto;
  }

  .navbar {
    background-color: var(--coquelicot);
    color: var(--white);
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    visibility: hidden;
    transition: 0.25s var(--cubic-in);
  }

  .navbar.active {
    visibility: visible;
    transform: translateY(-100%);
    transition: 0.5s var(--cubic-out);
  }

  .nav-close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    font-size: 40px;
    padding: 10px;
    border-radius: var(--radius-8);
  }

  .navbar-link {
    font-family: var(--ff-catamaran);
    font-size: var(--fs-4);
    text-align: center;
    padding-block: 10px;
    margin-block-end: 20px;
    transition: var(--transition-1);
  }

  .navbar-link:is(:hover, :focus, .active) { color: var(--rich-black-fogra-29-1); }

  @media (min-width: 992px) {
    .nav-open-btn,
    .nav-close-btn { display: none; }

    .header .btn { display: block; }

    .header {
      background-color: transparent;
      box-shadow: none;
      padding-block: 30px;
      transition: var(--transition-1);
    }

    .header.active {
      transform: translateY(-100%);
      background-color: var(--white);
      padding-block: 20px;
      box-shadow: var(--shadow-1);
      animation: slideIn 0.5s ease forwards;
    }

    @keyframes slideIn {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(0); }
    }

    .header .container { gap: 30px; }

    .header .logo { color: var(--white); }

    .header.active .logo { color: var(--rich-black-fogra-29-1); }

    .navbar,
    .navbar.active {
      all: unset;
      margin-inline-start: auto;
    }

    .navbar-list {
      display: flex;
      gap: 10px;
    }

    .navbar-link {
      color: var(--white);
      font-size: unset;
      padding: 0 10px;
      margin-block-end: 0;
    }

    .header.active .navbar-link { color: var(--rich-black-fogra-29-1); }

    .header .navbar-link:is(:hover, :focus, .active) { color: var(--coquelicot); }

    .header.active .btn {
      background-color: var(--coquelicot);
      color: var(--white);
    }

    .header.active .btn:is(:hover, :focus) { background-color: var(--rich-black-fogra-29-1); }
  }
</style>