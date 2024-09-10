<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-64 bg-gray-800 h-screen">
            <nav class="mt-5">
                <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">
                    <i class='bx bxs-home mr-2'></i>Home
                </a>
                <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">
                    <i class='bx bxs-info-circle mr-2'></i>About
                </a>
                <a href="#" class="block py-2 px-4 text-white hover:bg-gray-700">
                    <i class='bx bxs-contact mr-2'></i>Contact
                </a>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
            <div class="p-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Hey There
                </button>
            </div>
        <!-- Main Content -->
        <div class="flex-1">
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-16 rounded-3xl shadow-2xl bg-white bg-opacity-10">
            <hr id="footer-divider" class="my-8 border-pink-300 opacity-30 sm:mx-auto lg:my-12">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition duration-300">
                        <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter brightness-0 invert" alt="Landwind Logo" />
                        BlockExplorer
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-base text-center text-white">
                    © 2023 BlockExplorer. Discover the blockchain, one block at a time.
                </div>
            </div>
        </div>
    </footer>
        </div>
    </div>
</template>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
