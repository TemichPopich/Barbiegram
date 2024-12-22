<template>
    <div class="container h-100" style="text-align: center;">
        <h3 class="text-pink-800 font-semibold drop-shadow-lg">{{ title }}</h3>
        <ul>
            <li v-for="(card, index) in cards" :key="index">

                <friendCard :friendName="card.name" :image="card.image">
                </friendCard>
            </li>
        </ul>
    </div>
</template>

<script>
import friendCard from './friend-card.vue';

export default {
    name: "CardList",
    components: { friendCard },
    props: {
        title: {
            type: String,
            default: "Ваши друзья"
        },
        cards: {
            type: Array,
            default: () => []
        }
    }
}
</script>