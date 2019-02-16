<template>
    <div class="send_message_bar">
        <div class="top clear">
            <ul class="list clear">
                <li v-for="(item,index) in 5"
                    :key="index"
                    :class="{'item':1,'phone rt':index==4}"></li>
            </ul>
        </div>
        <div class="middle">
            <div class="text"
                 contenteditable="true"
                 v-text="msg"
                 @input="msg=$event.target.innerHTML">
            </div>
        </div>
        <div class="bottom">
            <span class="btn"
                  @click="send">发送(S)</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "sendMessageBar",
    data() {
        return {
            msg: "hi !"
        };
    },
    sockets: {
        //不能改,j建立连接自动调用connect
        connect: function() {
            //与socket.io连接后回调
            console.log("socket connected");
        },
        //服务端向客户端发送login事件
        login: function(value) {
            //监听login(后端向前端emit  login的回调)
            console.log(value);
        }
    },
    methods: {
        send() {
            // console.log(this.msg);
            this.$socket.emit("compile"); //触发start
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.send_message_bar {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0 0.1rem;
    box-sizing: border-box;
    .top {
        width: 100%;
        height: 20%;
        .list {
            width: 100%;
            height: 100%;
            overflow: hidden;
            padding: 0 0.1rem;
            box-sizing: border-box;
            .item {
                display: inline-block;
                width: 0.3rem;
                height: 0.3rem;
                background: $midGray;
                margin-right: 0.1rem;
                cursor: pointer;
            }
            .phone {
                margin-right: 0;
            }
        }
    }
    .middle {
        width: 100%;
        height: 50%;
        padding: 0.05rem 0.1rem;
        box-sizing: border-box;
        .text {
            width: 100%;
            height: 100%;
            overflow: auto;
            outline: none;
            font-size: 0.11rem;
            line-height: 0.15rem;
            word-break: break-all;
            word-wrap: break-word;
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
                border-radius: 0.08rem;
                -webkit-box-shadow: inset 0 0 6px $scrollbarShadow;
                background-color: $scrollbarShadow;
            }
        }
    }
    .bottom {
        width: 100%;
        height: 30%;
        text-align: right;
        position: relative;
        .btn {
            display: inline-block;
            width: 0.6rem;
            height: 0.2rem;
            background: $midGray;
            color: $secTextColor;
            font-size: 0.11rem;
            text-align: center;
            line-height: 0.2rem;
            border-radius: 0.02rem;
            position: absolute;
            top: 0.1rem;
            right: 0.1rem;
            &:hover {
                color: $whiteBg;
                background: $greenBtnHover;
                cursor: pointer;
            }
        }
    }
}
</style>

