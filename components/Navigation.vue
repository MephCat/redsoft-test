<template>
  <nav class="navigation">
    <nuxt-link :to="'/'">
      <Logo/>
    </nuxt-link>
    <nuxt-link :to="'/catalog'">
      <h5>
        Каталог
      </h5>
    </nuxt-link>
    <nuxt-link :to="'/delivery'">
      <h5>
        Доставка
      </h5>
    </nuxt-link>
    <nuxt-link :to="'/pay'">
      <h5>
        Оплата
      </h5>
    </nuxt-link>
    <nuxt-link :to="'/contact'">
      <h5>
        Контакты
      </h5>
    </nuxt-link>
    <nuxt-link :to="'/about'">
      <h5>
        О галереи
      </h5>
    </nuxt-link>
  </nav>
</template>
