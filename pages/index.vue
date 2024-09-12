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

const {data} = useAsyncData(async () => {
    const response = await $fetch<{ test: string }>('/some/test/endpoint')
    return response
})
const response = data.value

onMounted(async () => {
    await $fetch<{ test: string }>('/some/test/endpoint')
})
</script>