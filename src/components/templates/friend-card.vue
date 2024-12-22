<template>
    <a href="#">
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
                <div class="col-md-4 img_wrap" style="width: 15vh; height: 15vh;">
                    <img :src="image" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title "><span
                                class="self-center p-2 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent font-semibold whitespace-nowrap dark:text-white drop-shadow-lg">{{
                                    friendName }}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
    
<script>
export default {
    name: "FriendCard",
    props: ["friendName", "image"]
}
</script>