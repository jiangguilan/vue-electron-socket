<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "my-project",
    data() {
        return {};
    },
    methods: {
        fontSize: function() {
            let w = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = w / 7.5 + "px";
        }
    },
    created() {
    },
    mounted() {
        // this.fontSize();
    }
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
#app {
    width: 100%;
    height: 100%;
}
</style>

