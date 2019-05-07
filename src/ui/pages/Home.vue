<template>
  <div class="home u-full-width">
    <template v-if="articles != null">
      <transition-group name="list" class="home__article-list" tag="div">
        <div
          class="home__article list-articles-item"
          v-for="article in articles"
          :key="article._id"
        >
          <picture>
            <source media="(max-width: 37.5em)" :srcset="`${publicPath}${article.imageSet.lowRes}`">
            <img
              class="u-full-width"
              :alt="article.title"
              :srcset="`${publicPath}${article.imageSet.lowRes} 1x, ${publicPath}${article.imageSet.highRes} 2x`"
              :src="`${publicPath}${article.imageSet.highRes}`"
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

.list-enter-active,
.list-leave-active,
.list-move {
	transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
	transition-property: opacity, transform;
}

.list-enter {
	opacity: 0;
	transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
	opacity: 1;
	transform: translateX(0) scaleY(1);
}

.list-leave-active {
	position: absolute;
}

.list-leave-to {
	opacity: 0;
	transform: scaleY(0);
	transform-origin: center top;
}
</style>

