<script setup>
import { computed } from "vue";
import { mdiTrendingDown, mdiTrendingUp, mdiTrendingNeutral } from "@mdi/js";
import BaseLevel from "@/components/BaseLevel.vue";

const props = defineProps({
    data:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    progress: {
        type: Number,
        default: 0,
    },
    text: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
});

const pillType = computed(() => {
    if (props.type) {
        return props.type;
    }

    if (props.progress) {
        if (props.progress >= 60) {
            return "success";
        }
        if (props.progress >= 40) {
            return "warning";
        }

        return "danger";
    }

    return "info";
});

const pillIcon = computed(() => {
    return {
        success: mdiTrendingUp,
        warning: mdiTrendingNeutral,
        danger: mdiTrendingDown,
        info: null,
    }[pillType.value];
});

</script>

<template>
    <BaseLevel>
       
        <BaseLevel type="justify-start">
            <div class="w-8 h-8 mr-6 my-1 bg-gray-100 rounded-full flex justify-center items-center">
                {{ data }}
            </div>
            <div class="text-center md:text-left overflow-hidden">
                <h5 class="text-lg flex justify-center items-center">
                    <span>{{ name }}</span>
                </h5>
            </div>
        </BaseLevel>
        whats
    </BaseLevel>
</template>
