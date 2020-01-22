<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        <span v-html="data.tagline"></span>
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <Content slot-key="intro"/>

    <h3 v-if="data.featuresTitle !== null">{{ data.featuresTitle }}</h3>
    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <div class="feature-header">
          <img
            v-if="feature.image"
            :src="$withBase(feature.image)"
            :alt="feature.title || 'feature'"
          >
          <h2 v-if="feature.image == null">{{ feature.title }}</h2>
        </div>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    <h3 v-if="data.sponsors && data.sponsors.length">Supported by</h3>
    <ul
      class="sponsors"
      v-if="data.sponsors && data.sponsors.length"
    >
      <li
        class="sponsor"
        v-for="(sponsor, index) in data.sponsors"
        :key="index"
      >
        <img
          v-if="sponsor.logo"
          :src="$withBase(sponsor.logo)"
          :alt="sponsor.logo || 'sponsor'"
        >
      </li>
    </ul>

    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 9rem
  max-width 900px
  margin 0px auto
  display block
  box-sizing border-box
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-family 'FrontageCondensed Regular'
      color #D33D3C
      letter-spacing -0.464rem
      text-indent -0.464rem
      font-size 3.688rem
      margin 0 auto 1.8rem auto !important
    h1, .description, .action
      margin 1.8rem auto
    .description
      font-family 'Slabo 27px'
      max-width 35rem
      font-size 1.5rem
      line-height 1.3
      color $textColor
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 32%
    max-width 32%
    .feature-header
      display flex
      justify-content center
      height 70px
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color $textColor
    p
      color #0
      text-align center
  ul.sponsors
    padding-left 0
    display flex
    align-items center
    flex-wrap wrap
    li
      list-style-type none
      padding 10px
      flex-grow 1
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
