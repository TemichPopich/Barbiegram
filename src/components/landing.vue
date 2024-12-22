<template>
    <div class="hero min-h-screen bg-base-200 container" style="width: 50%">
        <div class="hero-content text-center" style="text-align: center;">
            <h1
                class="text-5xl font-bold self-center p-2 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent whitespace-nowrap dark:text-white drop-shadow-lg">
                Барбиграм</h1>


            <div id="carouselExampleSlidesOnly" class="carousel slide container p-2 rounded" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img_wrap" style="width: auto"
                            src="https://focus.ua/static/storage/thumbs/1088x/7/fc/a9fcf9a3-2a2e62c4c1c1c15f358a942de4d43fc7.jpg"
                            alt="Первый слайд">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="https://focus.ua/static/storage/thumbs/1088x/7/fc/a9fcf9a3-2a2e62c4c1c1c15f358a942de4d43fc7.jpg"
                            alt="Второй слайд">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="https://focus.ua/static/storage/thumbs/1088x/7/fc/a9fcf9a3-2a2e62c4c1c1c15f358a942de4d43fc7.jpg"
                            alt="Третий слайд">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            

            <a href="/login"><button type="button"
                    class="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Зарегистрироваться</button></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppLanding'
}
</script>