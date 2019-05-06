<template>
  <div class="home u-full-width">
    <template v-if="articles != null">
      <transition-group name="list-articles" class="home__article-list" tag="div">
        <div
          class="home__article list-articles-item"
          v-for="article in articles"
          :key="article._id"
        >
          <picture>
            <source media="(max-width: 37.5em)" :srcset="article.imageSet.lowRes">
            <img
              class="u-full-width"
              :alt="article.title"
              :srcset="`${article.imageSet.lowRes} 1x, ${article.imageSet.highRes} 2x`"
              :src="`${article.imageSet.highRes}`"
            >
          </picture>
          <div class="home__article-excerpt">
            <h4 class="heading-4">{{ article.title }}</h4>
            <router-link
              class="link link--primary content-3"
              :to="{ path: `/blog/${article.link}`, query: { articleId: article._id } }"
            >Read more</router-link>
          </div>
        </div>
      </transition-group>
    </template>
    <template v-else>
      <p class="horizontal-center">
        <Loader/>
      </p>
    </template>
  </div>
</template>

<script>
import Loader from "../components/Loader";

export default {
	name: "Home",
	components: {
		Loader
	},
	computed: {
		articles() {
			const { articles } = this.$store.state;
			return articles.list;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/pages/_home.scss";
@import "@/ui/styles/components/_links.scss";
@import "@/ui/styles/_utilities.scss";
@import "@/ui/styles/_typography.scss";

.list-articles-item {
	transition: all 1s;
	display: inline-block;
}
.list-articles-enter, .list-articles-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
// .list-articles-leave-active {
// 	position: absolute;
// }
</style>

