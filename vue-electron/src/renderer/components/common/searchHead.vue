<template>
    <div class="search_head">
        <div class="top clear">
            <span class="search_bar clear lt">
                <span class="img_box lt">
                    <img src="../../../../static/img/search_icon.png" >
                </span>
                <input class="input lt"
                       type="text"
                       placeholder="搜索">
            </span>
            <span class="add lt">+</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "searchHead",
    data() {
        return {
            msg: "search head"
        };
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.search_head {
    .top {
        width: 100%;
        height: 0.46rem;
        padding: 0.13rem 0;
        box-sizing: border-box;
        background: $gray;
        .search_bar {
            display: inline-block;
            width: 1.5rem;
            height: 0.2rem;
            line-height: 0.2rem;
            overflow: hidden;
            background: $grayBtn;
            border-radius: 0.02rem;
            margin: 0 0.1rem;
            .img_box {
                display: inline-block;
                width: 0.088rem;
                height: 0.088rem;
                line-height: 0.088rem;
                margin: 0.06rem 0 0 0.06rem;
                overflow: hidden;
            }
            .input {
                background: none;
                width: 1.34rem;
                height: 100%;
                border: none;
                outline: none;
                font-size: 0.1rem;
                padding: 0 0.06rem;
                box-sizing: border-box;
            }
        }
        .add {
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 0.02rem;
            background: $grayBtn;
            font-size: 0.18rem;
            color: $secTextColor;
            text-align: center;
            line-height: 0.2rem;
            cursor: pointer;
        }
    }
}
</style>


