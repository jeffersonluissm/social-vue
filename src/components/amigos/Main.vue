<template>
  <div>
    <h1>Amigos</h1>
    <ul>
      <li v-for="f in friends" :key="f.id">
        {{f.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Amigos',
  data () {
    return {
      friends: [
        {
          name: 'Laura'
        },
        {
          name: 'Diego'
        }
      ]
    }
  }
}
</script>

<style>

</style>
