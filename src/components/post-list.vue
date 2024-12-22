<template>
    <div class="container" style="width: 60%">
        <div>
            <h1 class="self-center p-2 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent font-semibold whitespace-nowrap dark:text-white drop-shadow-lg">Ваши публикации</h1>
        </div>
        <div class="container mx-auto">

            <form>
                <div
                    class="w-full mb-4 border border-pink-900 rounded-lg bg-pink-300">
                    <div class="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-50 border-pink-900 border rounded-t-lg">
                        <label for="comment" class="sr-only">Напишите сообщение для публикации</label>
                        <textarea id="comment" rows="4" v-model="newCardTitle"
                            class="w-full px-0 text-sm text-gray-900 bg-gradient-to-r from-pink-100 to-pink-50 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Напишите сообщение для публикации..." required></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pink-500 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-blue-900 hover:bg-pink-700"
                            @click="addCard">
                            Добавить пост
                        </button>
                        <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                            <button type="button"
                                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                </svg>
                                <span class="sr-only">Attach file</span>
                            </button>
                            <button type="button"
                                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 16 20">
                                    <path
                                        d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                                <span class="sr-only">Set location</span>
                            </button>
                            <button type="button"
                                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                                <span class="sr-only">Upload image</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">Помните, что содержание постов не доожно противоречить правилам
                <a href="/rules" class="text-pink-600 dark:text-blue-500 hover:underline">Комьюнити</a>.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <PostCard v-for="card in cards" 
                :key="card.id" 
                :title="card.title"
                :text="card.text" />
            </div>
        </div>
    </div>
</template>

<script>
import PostCard from './templates/post-card.vue';
export default {
    name: 'PostList',
    components: { PostCard },
    data() {
        return {
            newCardTitle: '',
            cards: [
                {
                    title: 'Первый пост в барбиграме',
                    text: 'Описание первого поста в барбиграме'
                }
            ]
        }
    },  
    methods: {
        addCard() {
            if (this.newCardTitle) {
                this.cards.push({
                    title: "Новая карта",
                    text: this.newCardTitle
                })
                this.newCardTitle = ''
            }
        }
    }
}
</script>

<style>
body {
    text-align: center;
}

.container {
    padding: 20px;
}
</style>