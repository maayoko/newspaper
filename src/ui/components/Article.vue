<template>
  <article class="article">
    <div class="article__image">
      <picture>
        <source media="(min-width: 800px)" :srcset="article.imageSet.lowRes">
        <source :srcset="article.imageSet.highRes">
        <img :alt="article.title" :src="article.imageSet.lowRes">
      </picture>
      <h4 class="article__title">{{ article.title }}</h4>
    </div>
    <div class="article__content" v-html="article.content"></div>
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
					"bem-metodologija",
					{ lowRes: "", highRes: "" }
				)
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/components/_article.scss";
</style>

