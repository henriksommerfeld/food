<script lang="ts">
  export let backgroundImage: string
</script>

<div class="intro-banner" style="--image: url({backgroundImage})">
  <a class="home-link" href="/" title="Till startsidan"> Till startsidan </a>
  <div class="intro-banner-dark-overlay">
    <div class="intro-banner-width-constrainer">
      <slot />
      <!-- searchbox -->
    </div>
  </div>
</div>

<style>
  .home-link {
    position: absolute;
    width: 2rem;
    top: 2rem;
    left: 2rem;
  }
  .intro-banner {
    background-size: cover;
    background-position: center;
    position: relative;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    opacity: 0.99;

    @media (min-width: 550px) {
      padding-top: initial;
    }
  }

  .intro-banner::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000;
    transition: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -100;
    background-image: var(--image);
    opacity: 1;
  }
  .intro-banner-width-constrainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 14rem;
    max-width: var(--content-max-width);

    @media (min-width: 1024px) {
      min-height: 18rem;
      justify-content: center;
    }
  }

  .intro-banner-dark-overlay {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    padding-top: 3rem;

    @media (min-width: 550px) {
      padding-top: initial;
    }
  }
</style>
