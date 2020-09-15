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
        <button >
          Купить
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
  max-width: 280px;
  min-height: 334px;
  display: flex;
  flex-direction: column;
  border: 1px solid #E1E1E1;
  margin: 39px 10px;
  &.purchased{
    opacity: .5;
  }
  .top{
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
  props: ['item']

}
</script>
