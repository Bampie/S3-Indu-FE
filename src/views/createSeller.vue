<template>
  <div>Hi this is the create seller page.</div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: "createSeller",
  setup() {
    const auth0 = useAuth0();

    
    return {
      user: auth0.user,
      userId: auth0.user.value.sub
    }
  }
}
</script>

<style></style>
