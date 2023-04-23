<script setup>
const { data: book } = await useFetch("http://localhost:3000/books");
const data = useState("data", () => book);
console.log(data.value);
</script>

<template>
  <h1>BOOKS</h1>
  <div class="card" v-for="item in data" :key="item">
    <img src="{{item.cover}}" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4>
        <b>{{ item.bookName }}</b>
      </h4>
      <p>Page:{{ item.page }}</p>
      <p>Publisher:{{ item.publisher }}</p>
      <NuxtLink :to="{ path: `/books/${item._id}` }"><p>Details</p></NuxtLink>
    </div>
  </div>
</template>
