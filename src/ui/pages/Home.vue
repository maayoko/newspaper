<template>
  <div>
    <template v-if="articles != null">
      <ul>
        <li v-for="(article, idx) in articles" :key="idx">
          <router-link
            :to="{ path: `/blog/${article.link}`, query: { articleId: article._id } }"
          >{{ article.title }}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
	name: "Home",
	data: function() {
		return {
			articles: this.$store.state.articles.articles
		};
	}
};
</script>

