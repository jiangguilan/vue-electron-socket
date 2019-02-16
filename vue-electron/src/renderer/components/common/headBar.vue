<template>
    <div class="head_bar clear">
        <div class="title lt">
            {{title}}
            {{0?'(4)':''}}
        </div>
        <div class="act rt">
            <div class="top">
                <span></span>
                <span>—</span>
                <span>口</span>
                <span>X</span>
            </div>
            <div class="bottom">...</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "headBar",
    data() {
        return {
            title:
                "title title title title title title title title title title title title title title title title title title title title title title title title title title"
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.head_bar {
    width: 100%;
    height: 100%;
    .title {
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.15rem;
        width: 70%;
    }
    .act {
        display: inline-block;
        width: 30%;
        height: 100%;
        text-align: right;
        position: absolute;
        top: 0;
        right: 0;
        .top {
            width: 100%;
            height: 50%;
            text-align: right;
            position: absolute;
            top: -0.1rem;
            right: 0.1rem;
            span {
                display: inline-block;
                width: 10%;
                height: 100%;
                font-size: 0.1rem;
                text-align: right;
                cursor: pointer;
            }
        }
        .bottom {
            text-align: right;
            line-height: 0.1rem;
            width: 100%;
            height: 50%;
            position: absolute;
            bottom: 0.1rem;
            right: 0.1rem;
            font-size: .19rem;
            cursor: pointer;
        }
    }
}
</style>


