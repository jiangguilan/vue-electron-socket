<template>
    <div class="home clear">
        <div class="left_box lt">
            <leftSide></leftSide>
        </div>
        <div class="middle_box lt">
            <div class="search">
                <searchHead></searchHead>
            </div>
            <div class="list">
                <userList></userList>
            </div>
        </div>
        <div class="right_box">
            <div class="rt_head">
                <headBar></headBar>
            </div>
            <div class="rt_middle">
                <showMessageBar></showMessageBar>
            </div>
            <div class="rt_bottom">
                <sendMessageBar></sendMessageBar>
            </div>
        </div>
    </div>
</template>
<script>
import leftSide from "./common/leftSide";
import headBar from "./common/headBar";
import searchHead from "./common/searchHead";
import sendMessageBar from "./common/sendMessageBar";
import showMessageBar from "./common/showMessageBar";
import userList from "./common/userList";
import loginPage from "./login";

export default {
    name: "home",
    data() {
        return {
            isLogin: false
        };
    },
    components: {
        leftSide,
        headBar,
        searchHead,
        sendMessageBar,
        showMessageBar,
        userList,
        loginPage
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/common.scss";
.home {
    width: 100%;
    height: 100%;
    display: flex;
    .left_box {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.5rem;
        height: 100%;
        background: $mainBlack;
        z-index: 100;
    }
    .middle_box {
        width: 2rem;
        height: 100%;
        background: $midGray;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0.5rem;
        z-index: 99;
        .search {
            width: 100%;
            height: 0.46rem;
        }
        .list {
            width: 100%;
            height: 100%;
            overflow: hidden;
            padding-bottom: 0.46rem;
            box-sizing: border-box;
        }
    }
    .right_box {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 98;
        background: $mainBg;
        left: 2.5rem;
        height: 100%;
        .rt_head {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 0.46rem;
            border-bottom: 0.01rem solid $midGray;
            overflow: hidden;
            padding: 0.1rem;
            box-sizing: border-box;
            z-index: 97;
        }
        .rt_middle {
            width: 100%;
            // height: 3rem;
            // height: 100%;
            // min-height: 3rem;
            position: absolute;
            bottom: 1.2rem;
            top: 0.46rem;
            right: 0;
            z-index: 95;
        }
        .rt_bottom {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 1.2rem;
            border-top: 0.01rem solid $midGray;
            background: $whiteBg;
            z-index: 96;
        }
    }
}
</style>


