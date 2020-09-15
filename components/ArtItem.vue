<template>
  <div class="art-item" v-bind:class="{ purchased: item.purchased}">
    <div class="top">
      <img :src="item.imgUrl"
           :alt="item.name">
    </div>
    <div class="bottom">
      <h2>
        {{item.name}}
      </h2>
      <div class="left"
           v-if="!item.purchased">
        <span class="through-text"
              v-if="item.discount">
          {{ item.discount }} $
        </span>
        <p>
          {{item.cost}} $
        </p>
      </div>
      <div class="right"
           v-if="!item.purchased">
        <MinLoader v-if="loader"/>
        <button v-else
                @click.prevent="addCart"
                v-bind:class="{ active: itemInCard }"
                :disabled="itemInCard">
          {{itemInCard? 'В корзине': 'Купить'}}
        </button>
      </div>
      <h4 v-else>
        Продана на аукционе
      </h4>
    </div>
  </div>
</template>
<style lang="scss">
.art-item{
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  min-height: 334px;
  max-height: 334px;
  display: block;
  border: 1px solid #E1E1E1;
  margin: 39px 10px;
  &.purchased{
    opacity: .5;
  }
  .top{
    width: 100%;
    padding: 0;
    height: 160px;
    img{
      min-width: 100%;
      min-height: 100%;
    }
  }
  .bottom{
    padding: 25px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    h2{
      width: 100%;
      margin: 0 0 22px 0;
    }
    .left{
      width: 50%;
      span{
        font-weight: 300;
        font-size: 14px;
        line-height: 150%;
      }
      p{
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
      }
    }
    .right{
      width: 50%;
    }
  }
}
</style>
<script>
export default {
  data: () => ({
    cardUser: [],
    itemInCard: false,
    loader: false
  }),
  props: ['item'],
  mounted() {
    if(localStorage.getItem('cardUser')){
      this.cardUser = JSON.parse(localStorage.cardUser)
      this.checkCard()
    }
  },
  methods: {
    async addCart() {
      this.loader = true
      const url = 'https://jsonplaceholder.typicode.com/posts/1';
      const response = await this.$axios.get(url)
      if(response.status === 200){
          this.addLocalStorage()
          this.loader = false
      }
    },
    checkCard() {
      const el = this.cardUser.find(el => el.id === this.item.id)
      if(el !== undefined){
        this.itemInCard = true
      }
    },
    addLocalStorage(){
        this.cardUser.push(this.item)
        this.itemInCard = true
        localStorage.setItem('cardUser', JSON.stringify(this.cardUser))
    }
  }
}
</script>
