<template>
  <div>
    <h1>
      Картины эпохи Возрождения
    </h1>

    <div class="art-list">
      <ArtItem v-for="artItem of artList"
               :key="artItem.id"
               :item="artItem"
               />
    </div>
  </div>
</template>

<script>
export default {
  head(){
    // console.log(this.$store.state['artList']['artList'])
    return {
      title: 'Ткстове задание для RedSoft',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Список таваров'
        }
      ]
    }
  },
  computed: {
    artList(){
      return this.$store.getters["artList/artList"]
    }
  },
  async fetch({store}) {
    if(store.getters["artList/artList"].length === 0){
      console.log(store.dispatch('artList/fetch'))
      await store.dispatch('artList/fetch')
    }
  }
}
</script>

