<template>
  <div class="blog">
    <div class="blog__article">
      <Article :article="article"/>
    </div>
    <div class="blog__players-stats">
      <PlayersStats :players="players"/>
    </div>
  </div>
</template>

<script>
import Article from "@/ui/components/Article";
import PlayersStats from "@/ui/components/PlayersStats";

export default {
	name: "Blog",
	components: {
		Article,
		PlayersStats
	},
	data: function() {
		const { articleId } = this.$route.query;
		const article = this.$store.getters.findArticleById(articleId);
		const { players } = this.$store.state;
		return { article, players: players.list };
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/pages/_blog.scss";
</style>

