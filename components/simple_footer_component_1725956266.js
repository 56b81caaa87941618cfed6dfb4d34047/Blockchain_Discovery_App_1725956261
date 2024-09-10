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
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        BlockExplorer
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
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
