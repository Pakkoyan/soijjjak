<script lang="ts">
    import { navigate } from 'svelte-routing';
    import { userNameStore } from "../store";
    let userName: string = '';

    function registrationHandler() {
        userNameStore.set(userName);
        navigate('/questions');
    }

</script>

<style>
    .registration-input {
        display: block;
        width: 300px;
        height: 30px;
        text-align: center;
        margin-bottom: 20px;
    }
</style>

<h1>Введите имя</h1>
<input bind:value={ userName } class="registration-input" placeholder="Введите имя">
<button on:click={registrationHandler}>начать тестирование</button>




