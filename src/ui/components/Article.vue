<template>
  <article class="article">
    <div class="article__image u-full-width">
      <picture>
        <source media="(max-width: 37.5em)" :srcset="`${publicPath}${article.imageSet.lowRes}`">
        <img
          class="u-full-width"
          :alt="article.title"
          :srcset="`${publicPath}${article.imageSet.lowRes} 1x, ${publicPath}${article.imageSet.highRes} 2x`"
          :src="`${publicPath}${article.imageSet.highRes}`"
        >
      </picture>
      <div class="article__title">
        <h5 class="heading-5">{{ article.title }}</h5>
      </div>
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

