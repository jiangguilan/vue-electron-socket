<template>
    <div class="left_side clear">
        <ul class="list">
            <li :class="{'avartar':index==0,'msg':index==1,'user':index==2,'wish':index==3,'more':index==4,'item':1}"
                v-for="(item,index) in 5"
                :key="index">
                <img src="../../../../static/img/avartar.jpg" >
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "leftSide",
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.left_side {
    width: 100%;
    height: 100%;
    .list {
        position: relative;
        width: 100%;
        height: 100%;
        .item {
            width: 0.26rem;
            height: 0.26rem;
            background: $whiteBg;
            border-radius: 0.02rem;
            margin: 0.15rem auto;
            cursor: pointer;
            line-height: 0.26rem;
            text-align: center;
            overflow: hidden;
        }
        .more {
            position: absolute;
            bottom: 0.1rem;
            left: 50%;
            margin-left: -0.125rem;
        }
    }
}
</style>


