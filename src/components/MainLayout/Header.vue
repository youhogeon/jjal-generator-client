<script setup>
    const { VITE_TITLE } = import.meta.env
</script>

<template>
    <header class="bg-slate-900 text-white font-bold text-3xl py-2 flex justify-center">
        <router-link to="/test">    
            <h1 class="flex items-center cursor-pointer select-none">
                <div class="mr-2">
                    {{ VITE_TITLE }}
                </div>
                <font-awesome-icon icon="fa-solid fa-ribbon" />
            </h1>
        </router-link>
    </header>
</template>