<script setup>
defineProps({
  msg: String,
})

const App = `
function App(props) {
    const [count, setCount] = React.useState(0);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>count is: {count}</button>
      </>
    )
}
`

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ReactOnAny props="" root="App">
      {{ App }}
    </ReactOnAny>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
