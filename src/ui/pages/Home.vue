<template>
  <div class="home">
    <template v-if="articles != null">
      <div class="home__article-list">
        <div class="home__article" v-for="(article, idx) in articles" :key="idx">
          <picture>
            <source media="(min-width: 800px)" :srcset="article.imageSet.lowRes">
            <source :srcset="article.imageSet.highRes">
            <img :alt="article.title" :src="article.imageSet.lowRes">
          </picture>
          <div>
            <h4>{{ article.title }}</h4>
            <router-link
              :to="{ path: `/blog/${article.link}`, query: { articleId: article._id } }"
            >Read more</router-link>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
	name: "Home",
	data: function() {
		return {
			articles: this.$store.state.articles
		};
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/pages/_home.scss";
</style>

