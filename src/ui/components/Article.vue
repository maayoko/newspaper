<template>
  <article class="article">
    <div class="article__image">
      <picture>
        <source media="(min-width: 800px)" :srcset="article.imageSet.highRes">
        <source :srcset="article.imageSet.lowRes">
        <img :alt="article.title" :src="article.imageSet.highRes">
      </picture>
      <h4>{{ article.title }}</h4>
    </div>
  </article>
</template>

<script>
import Article from "@/domain/models/Article";
import * as articleService from "@/domain/services/articleService";

export default {
	name: "Article",
	props: {
		article: {
			type: Article,
			default: () =>
				articleService.create(
					"Bem metodologija",
					"BEM je kratica za Block, Element, Modifier",
					{ lowRes: "", highRes: "" }
				)
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/components/_article.scss";
</style>

