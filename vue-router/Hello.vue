<template>
    <div>
        <h2>Hello {{name}} {{$attrs}}</h2>
    </div>
</template>
<script>
    export default {
        props: {
            name: {
                type: String,
                defalut: 'Vue Router'
            }
        }
    }
</script>
