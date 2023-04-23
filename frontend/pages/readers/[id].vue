<script setup>
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
console.log("PARAMS", route.params.id);
const { data: reader } = await useFetch(
  `http://localhost:3000/readers/${route.params.id}`
);
console.log(reader.value.books);
</script>

<template>
  <h1>READER PROFILE</h1>
  <div class="card">
    <div class="container">
      <h4>
        <img src="" alt="" style="width: 100%" />
        <b>{{ reader.name }} {{ reader.surname }}</b>
      </h4>
      <p>gender:{{ reader.gender }}</p>
    </div>
  </div>
  <h1>OKUNAN KİTAPLAR</h1>

  <div class="card" v-for="books in reader.books">
    <p>----------------------------------------</p>
    <div class="container">
      <h4>
        <img src="" alt="" style="width: 100%" />
        <NuxtLink :to="{ path: `/books/${books._id._id}` }"
          ><b>{{ books._id.bookName }}</b>
        </NuxtLink>
      </h4>
      <h3>Your Comments:</h3>
      <p v-for="comments in books.comments">{{ comments }}</p>
    </div>
  </div>
</template>
