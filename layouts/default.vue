<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

export default defineComponent({
  components: { AppFooter, AppHeader }
})
</script>
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<style scoped lang="scss"></style>
