<script lang="ts">
    import { userNameStore } from "../store";
    import { correctAnswersStore } from "../store";
    import { get } from "svelte/store";

    const userName = get(userNameStore);
    const correctAnswers = get(correctAnswersStore);
</script>

<h2>
    {userName} Вы набрали {correctAnswers} очка
</h2>