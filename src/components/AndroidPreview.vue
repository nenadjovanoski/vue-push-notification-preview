<template>
    <div class="device iphone">
        <div class="notification">
            <div class="heading">
                <span
                    class="application-icon"
                />

                <span
                    class="application-name"
                    v-html="textApplicationName"
                />

                <span
                    class="application-time"
                    v-html="textTime"
                />
            </div>

            <span
                class="title"
                v-html="textTitle"
            />
        </div>
    </div>
</template>

<script>
import '@/assets/common.css';

export default {
    name: 'AndroidPreview',

    props: {
        textApplicationName: {
            default: 'ANDROID'
        },

        textTime: {
            default: '1h ago'
        },

        textTitle: {
            default: '4 Notifications'
        }
    }
}
</script>

<style>
.device {
    position: relative;

    width: 435px;
    height: 886px;

    font-family: 'SF Pro Text Regular', sans-serif;
}

.device .notification {
    position: absolute;
    top: 45.6%;
    left: 6.8%;

    width: 82.4%;
    height: 53px;

    padding: 8px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.60);
}

.device .heading {
    display: flex;
    align-items: center;

    font-size: 14px;
    color: #444444;
}

.device .heading .application-icon {
    width: 20px;
    height: 20px;

    background-color: #ffffff;
    border-radius: 5px;
}

.device .heading .application-name {
    margin-left: 10px;
    text-transform: uppercase;
}

.device .heading .application-time {
    margin-left: 194px;
}

.device .title {
    display: flex;
    margin-top: 10px;

    color: #000000;
}

</style>
