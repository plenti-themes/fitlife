<footer class="footer">
  <div class="section footer-top bg-dark has-bg-image" style="background-image: url('media/footer-bg.png')">
    <div class="container">

      <div class="footer-brand">

        <a href="." class="logo">
          <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>

          <span class="span">Fitlife</span>
        </a>

        <p class="footer-brand-text">
          Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.
        </p>

        <div class="wrapper">

          <img src="media/footer-clock.png" width="34" height="34" loading="lazy" alt="Clock">

          <ul class="footer-brand-list">

            <li>
              <p class="footer-brand-title">Monday - Friday</p>

              <p>7:00Am - 10:00Pm</p>
            </li>

            <li>
              <p class="footer-brand-title">Saturday - Sunday</p>

              <p>7:00Am - 2:00Pm</p>
            </li>

          </ul>

        </div>

      </div>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title has-before">Our Links</p>
        </li>

        <li>
          <a href="." class="footer-link">Home</a>
        </li>

        <li>
          <a href="." class="footer-link">About Us</a>
        </li>

        <li>
          <a href="." class="footer-link">Classes</a>
        </li>

        <li>
          <a href="." class="footer-link">Blog</a>
        </li>

        <li>
          <a href="." class="footer-link">Contact Us</a>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title has-before">Contact Us</p>
        </li>

        <li class="footer-list-item">
          <div class="icon">
            <ion-icon name="location" aria-hidden="true"></ion-icon>
          </div>

          <address class="address footer-link">
            1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
          </address>
        </li>

        <li class="footer-list-item">
          <div class="icon">
            <ion-icon name="call" aria-hidden="true"></ion-icon>
          </div>

          <div>
            <a href="tel:18001213637" class="footer-link">1800-121-3637</a>

            <a href="tel:+915552348765" class="footer-link">+91 555 234-8765</a>
          </div>
        </li>

        <li class="footer-list-item">
          <div class="icon">
            <ion-icon name="mail" aria-hidden="true"></ion-icon>
          </div>

          <div>
            <a href="mailto:info@fitlife.com" class="footer-link">info@fitlife.com</a>

            <a href="mailto:services@fitlife.com" class="footer-link">services@fitlife.com</a>
          </div>
        </li>

      </ul>

      <ul class="footer-list">

        <li>
          <p class="footer-list-title has-before">Our Newsletter</p>
        </li>

        <li>
          <form action="" class="footer-form">
            <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
              class="input-field">

            <button type="submit" class="btn btn-primary" aria-label="Submit">
              <ion-icon name="chevron-forward-sharp" aria-hidden="true"></ion-icon>
            </button>
          </form>
        </li>

        <li>
          <ul class="social-list">

            <li>
              <a href="." class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="." class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="." class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

          </ul>
        </li>

      </ul>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="copyright">
        &copy; 2022 Fitlife. All Rights Reserved By <a href="." class="copyright-link">codewithsadee.</a>
      </p>

      <ul class="footer-bottom-list">

        <li>
          <a href="." class="footer-bottom-link has-before">Privacy Policy</a>
        </li>

        <li>
          <a href="." class="footer-bottom-link has-before">Terms & Condition</a>
        </li>

      </ul>

    </div>
  </div>

</footer>

<style>
  .footer { font-size: var(--fs-6); }

  .footer-top .container {
    display: grid;
    gap: 50px;
  }

  .footer .logo { color: var(--white); }

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

  .footer-brand-text { margin-block: 25px; }

  .footer-top .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  .footer-brand-list li:not(:last-child) { margin-block-end: 15px; }

  .footer-brand-title,
  .footer-list-title {
    color: var(--white);
    font-family: var(--ff-catamaran);
  }

  .footer-list-title {
    font-size: var(--fs-4);
    font-weight: var(--fw-800);
    margin-block-end: 28px;
  }

  .footer-list-title::before {
    bottom: 0;
    width: 70px;
    height: 1px;
    background-color: var(--coquelicot);
  }

  .footer-list > li:not(:first-child) { margin-block-start: 12px; }

  .footer-link { transition: var(--transition-1); }

  .footer-link:not(.address):is(:hover, :focus) { color: var(--coquelicot); }

  .footer-list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }

  .footer-list-item .icon {
    background-color: var(--coquelicot);
    color: var(--white);
    font-size: 24px;
    padding: 8px;
    border-radius: 50px;
  }

  .footer-form {
    position: relative;
    margin-block-end: 30px;
  }

  .footer-form .input-field {
    background-color: var(--white);
    color: var(--rich-black-fogra-29-1);
    padding-block: 18px;
    padding-inline: 30px 80px;
    border-radius: var(--radius-10);
  }

  .footer-form .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    padding: 0;
    font-size: 26px;
    padding-inline: 12px;
  }

  .footer-form .btn-primary:is(:hover, :focus) {
    background-color: var(--rich-black-fogra-29-1);
    color: var(--white);
    box-shadow: none;
  }

  .social-list {
    display: flex;
    gap: 15px;
  }

  .social-link {
    background-color: var(--white_20);
    color: var(--white);
    padding: 13px;
    border-radius: 50%;
    transition: var(--transition-1);
  }

  .social-link:is(:hover, :focus) { background-color: var(--coquelicot); }

  .footer-bottom {
    background-color: var(--rich-black-fogra-29-2);
    color: var(--white);
    text-align: center;
    padding-block: 15px;
  }

  .copyright-link {
    display: inline-block;
    color: var(--coquelicot);
  }

  .footer-bottom-list {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-block-start: 10px;
  }

  .footer-bottom-link {
    padding-inline-start: 20px;
    transition: var(--transition-1);
  }

  .footer-bottom-link::before {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 10px;
    height: 10px;
    background-color: var(--coquelicot);
    border-radius: 50%;
  }

  .footer-bottom-link:is(:hover, :focus) { color: var(--coquelicot); }

  @media (min-width: 575px) {
    .footer-top .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 25px;
    }
  }

  @media (min-width: 768px) {
    .footer-bottom .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom-list { margin-block-start: 0; }
  }

  @media (min-width: 992px) {
    .footer-top .container {
      grid-template-columns: 0.85fr 0.5fr 1fr 0.85fr;
      column-gap: 50px;
    }
  }

  @media (min-width: 1200px) {
    .footer-top .container { grid-template-columns: 1fr 0.6fr 0.9fr 1fr; }
  }
</style>