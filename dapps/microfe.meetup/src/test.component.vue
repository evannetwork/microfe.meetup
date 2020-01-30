<template>
  <div class="evan theme-evan evan-vue-dapp">
    {{ myNiceDApp }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

@Component({ })
export default class TestComponent extends mixins(Vue) {
  myNiceDApp = 'my nice vue dapp!'
}
</script>
