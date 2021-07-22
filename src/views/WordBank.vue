<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-main>
      <div class="main" v-loading="loading">
        <el-row>
          <el-col>
            <p>随机词语：{{ word }} （已复制到剪贴板）</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button type="primary" @click="randomWord">换一个</el-button>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
import { WordBankContent } from "@/wordBankInterface";

/* eslint-disable @typescript-eslint/naming-convention */
@Options({
  components: {
    NavBar,
  },
})
/* eslint-enable @typescript-eslint/naming-convention */
export default class WordBank extends Vue {
  wordBankContent?: WordBankContent;
  word = "";
  loading = true;

  mounted(): void {
    void this.loadWordBankContent();
  }

  async loadWordBankContent(): Promise<void> {
    const id = this.$route.params.id;
    if (id === "" || typeof id !== "string") {
      await this.$router.push({ path: "/" });
      return;
    }
    const response = await fetch(`/word_bank/${id}.json`);
    this.wordBankContent = (await response.json()) as WordBankContent;
    this.loading = false;
    await this.randomWord();
  }

  async randomWord(): Promise<void> {
    if (this.wordBankContent !== undefined) {
      this.word = this.wordBankContent.words[Math.floor(Math.random() * this.wordBankContent.words.length)];
      await navigator.clipboard.writeText(this.word);
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  @media screen and (min-width: 1200px) {
    margin: 0 180px;
  }
}
</style>
