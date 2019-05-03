<template>
  <div style="display: flex; position:absolute;">
    <div style="flex-basis: 50%;">
      <Article :article="article"/>
    </div>
    <div style="flex-basis: 50%;">
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
		return { article, players };
	}
};
</script>
