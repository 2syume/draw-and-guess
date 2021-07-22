<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-main>
      <div class="main">
        <el-collapse v-loading="loading">
          <el-collapse-item
            v-for="wordBankMeta in wordBankMetas"
            :key="wordBankMeta.id"
            :title="wordBankMeta.name"
            :name="wordBankMeta.id"
          >
            <div>{{ wordBankMeta.description }}</div>
            <div>
              <router-link :to="{ path: `/wordbank/${wordBankMeta.id}` }" custom v-slot="{ href, navigate, isActive }">
                <el-link :active="isActive" :href="href" @click="navigate" type="primary">使用词库</el-link>
              </router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar.vue";
import { WordBankMeta } from "@/wordBankInterface";

/* eslint-disable @typescript-eslint/naming-convention */
@Options({
  components: {
    NavBar,
  },
})
/* eslint-enable @typescript-eslint/naming-convention */
export default class Home extends Vue {
  wordBankMetas: WordBankMeta[] = [];
  loading = true;

  mounted(): void {
    void this.loadWordBankMetas();
  }

  async loadWordBankMetas(): Promise<void> {
    const response = await fetch("/word_bank/meta.json");
    this.wordBankMetas = (await response.json()) as WordBankMeta[];
    this.loading = false;
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
