<template>
  <div style="display: flex;">
    <div style="flex-basis: 50%;">
      <Article :article="article"/>
    </div>
    <div style="flex-basis: 50%;"></div>
  </div>
</template>

<script>
import Article from "@/ui/components/Article";

export default {
	name: "Blog",
	components: {
		Article
	},
	data: function() {
		const { articleId } = this.$route.query;
		const article = this.$store.getters.findOneById(articleId);
		return { article };
	}
};
</script>
