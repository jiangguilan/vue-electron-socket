<template>
    <div class="user_list">
        <ul class="box">
            <li v-for="(item,index) in 12"
                :key="index"
                :class="{'clear item':1}">
                <span class="lt img_box">
                    <img src="../../../../static/img/avartar.jpg" >
                </span>
                <div class="lt text">
                    <div class="top clear">
                        <span class="title lt">title</span>
                        <span class="time rt">17:56</span>
                    </div>
                    <div class="bottom clear">
                        <span class="user_msg lt">
                            name:msg text msg text msg text msg text msg text msg text msg text msg text
                            <!-- <span class="name">name:</span>
                            <span class="text">msg</span> -->
                        </span>
                        <span class="hide rt">
                            <img src=""
                                 alt="">
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "userList",
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.user_list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .box {
        width: 100%;
        height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0;
            background-color: $mainBg;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px $scrollbarShadow;
            border-radius: 0.08rem;
            background-color: $mainBg;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: .08rem;
            -webkit-box-shadow: inset 0 0 6px $scrollbarShadow;
            background-color: $scrollbarShadow;
        }
        .item {
            width: 100%;
            height: 0.6rem;
            background: $lightGray;
            &:hover {
                background: $darkGray;
                cursor: pointer;
            }
            .img_box {
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 0.04rem;
                background: $whiteBg;
                margin: 0.1rem 0.1rem;
                overflow: hidden;
                line-height: .4rem;
            }
            .text {
                height: 100%;
                width: 1.4rem;

                .top {
                    height: 50%;
                    width: 100%;
                    .title {
                        font-size: 0.14rem;
                        line-height: 0.4rem;
                        height: 100%;
                        width: 70%;
                    }
                    .time {
                        height: 100%;
                        width: 30%;
                        font-size: 0.11rem;
                        color: $secTextColor;
                        line-height: 0.4rem;
                    }
                }
                .bottom {
                    height: 50%;
                    width: 100%;
                    .user_msg {
                        width: 1.1rem;
                        height: 0.2rem;
                        line-height: 0.26rem;
                        font-size: 0.12rem;
                        color: $secTextColor;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .hide {
                        display: inline-block;
                        width: 0.1rem;
                        height: 0.1rem;
                        background: $whiteBg;
                        margin: 0.07rem 0.1rem 0 0;
                    }
                }
            }
        }
    }
}
</style>


