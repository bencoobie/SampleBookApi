<script setup>
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
console.log("PARAMS", route.params.id);
const { data: book } = await useFetch(
  `http://localhost:3000/books/${route.params.id}`
);

console.log("BOOK", book);
const bookdetail = useState("bookdetail", () => book);
console.log(typeof bookdetail.value.cover);
</script>

<template>
  <h1>BOOK Details</h1>
  <div class="card">
    <div class="container">
      <h4>
        <img src="" alt="Avatar" style="width: 100%" />
        <b>{{ book.bookName }}</b>
      </h4>
      <p>Page:{{ book.page }}</p>
      <p>Publisher:{{ book.publisher }}</p>

      <p v-for="readers in book.readers">
        Okuyucular :<NuxtLink :to="{ path: `/readers/${readers._id}` }">{{
          readers.name
        }}</NuxtLink>
      </p>
    </div>
  </div>
</template>
