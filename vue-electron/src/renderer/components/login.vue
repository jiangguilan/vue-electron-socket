<template>
    <div class="login">
        <span @click="login">Login In</span>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            isLogin: this.$cookies.set("_isLogin")
        };
    },
    methods: {
        login() {
            this.$router.push('/home')
            this.ipc.send("toLog");
        }
    },
    created() {},
    mounted() {
    },
    computed: {}
};
</script>

