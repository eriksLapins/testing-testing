<template>
    <div>
        Hello {{ response }}
    </div>
</template>
<script setup lang="ts">
import {$fetch} from 'ofetch'
defineOptions({
    name: 'IndexPage'
})

const response = ref('');
onMounted(async () => {
    const reqResponse = await $fetch('/some/test/endpoint')
    response.value = reqResponse.test
})
</script>