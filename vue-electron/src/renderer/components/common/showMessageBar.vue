<template>
    <div class="show_message_bar">
        <ul class="list">
            <li v-for="(item,index) in 5"
                :key="index"
                :class="{'item':1,}">
                <div v-if="index!=4 && index!=0"
                     :class="{'box clear':1,'text_right':index==2}">
                    <span :class="{'img_box':1,'lt':index!=2,'rt':index==2}"></span>
                    <span :class="{'text_box':1,'lt':index!=2,'rt':index==2}">
                        <i class="icon"></i>
                        <span class="text"
                              v-text="msg">
                        </span>
                    </span>
                </div>
                <div class="tip"
                     v-if="index==4">"某某"撤回了一条消息</div>
                <div class="tip"
                     v-if="index==0">14:52</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "showMessageBar",
    data() {
        return {
            msg:
                "hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah hahah "
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.show_message_bar {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .list {
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.08rem;
            background-color: $mainBg;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px $scrollbarShadow;
            border-radius: 0.08rem;
            background-color: $mainBg;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 0.08rem;
            -webkit-box-shadow: inset 0 0 6px $scrollbarShadow;
            background-color: $scrollbarShadow;
        }
        .item {
            padding: 0.11rem 0;
            box-sizing: border-box;
            width: 100%;
            min-height: 0.6rem;
            max-height: auto;
            text-align: center;
            .box {
                width: 100%;
                height: 0.6rem;
                &.text_right {
                    .img_box {
                        margin: 0 0 0 0.1rem;
                    }
                    .text_box {
                        &:hover {
                            .text,
                            .icon {
                                background: $greenHover;
                            }
                        }
                        .text {
                            background: $green;
                        }
                        .icon {
                            background: $green;
                            transform: skewX(-40deg);
                            left: unset;
                            right: 0.06rem;
                        }
                    }
                }
                .img_box {
                    margin-right: 0.1rem;
                    display: inline-block;
                    background: $whiteBg;
                    border-radius: 0.04rem;
                    width: 0.3rem;
                    height: 0.3rem;
                    cursor: pointer;
                }
                .text_box {
                    position: relative;
                    display: inline-block;
                    .text {
                        cursor: pointer;
                        display: inline-block;
                        background: $whiteBg;
                        border-radius: 0.02rem;
                        color: $textColor;
                        width: auto;
                        max-width: 2.6rem;
                        min-width: 0.3rem;
                        min-height: 0.3rem;
                        max-height: auto;
                        padding: 0.05rem;
                        box-sizing: border-box;
                        font-size: 0.11rem;
                        text-align: center;
                        padding: 0.1rem;
                        box-sizing: border-box;
                        position: relative;
                        // border: .01rem solid $lightGray;
                    }
                    &:hover {
                        .text,
                        .icon {
                            background: $whiteHover;
                        }
                    }
                    .icon {
                        position: absolute;
                        display: inline-block;
                        background: $whiteBg;
                        transform: skewX(40deg);
                        top: 0.1rem;
                        left: 0.06rem;
                        width: 0.3rem;
                        height: 0.3rem;
                    }
                }
            }
            .tip {
                display: inline-block;
                min-width: 0.3rem;
                height: 0.2rem;
                background: $grayBtn;
                color: $whiteBg;
                font-size: 0.11rem;
                text-align: center;
                line-height: 0.2rem;
                border-radius: 0.02rem;
                padding: 0 0.1rem;
                box-sizing: border-box;
            }
        }
    }
}
</style>

