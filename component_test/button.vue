<template lang="html">
    <button>
        <slot>提交</slot>
    </button>
</template>

<script>
export default {
    name: 'submit-button',

}
</script>
<style lang="less">
    button{
        border: 1px solid red;
    }
</style>
