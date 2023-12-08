<script lang="ts">
    import { navigate } from "svelte-routing";
    import { correctAnswersStore } from "../store";

    let currentQuestionIndex: number = 1;
    let correctAnswers: number = 0;
    let selectedAnswer: any;
    let checkbox1 = false;
    let checkbox2 = false;
    let checkbox3 = false;
    let checkbox4 = false;

    function goToNextQuestion() {
        if(currentQuestionIndex == 15) {
            navigate('/result');
        }

        switch (currentQuestionIndex) {
            case 1:
                if (selectedAnswer === '3') {
                    correctAnswers++;
                }
                break;
            case 2:
                if (selectedAnswer === '2') {
                    correctAnswers++;
                }
                break;
            case 3:
                if (selectedAnswer === '4'){
                    correctAnswers++;
                }
                break;
            case 4:
                if (checkbox1 === false && checkbox2 === true && checkbox3 === false && checkbox4 === true) {
                    correctAnswers++;
                }
                break;
            case 5:
                if (checkbox1 === false && checkbox2 === true && checkbox3 === true && checkbox4 === false) {
                    correctAnswers++;
                }
                break;
            case 6:
                if (checkbox1 === false && checkbox2 === false && checkbox3 === true && checkbox4 === false) {
                    correctAnswers++;
                }
                break;
            case 7:
                if (selectedAnswer === '3') {
                    correctAnswers++;
                }
                break;
            case 8:
                if (selectedAnswer === '3') {
                    correctAnswers++;
                }
                break;
            case 9:
                if (selectedAnswer === '1') {
                    correctAnswers++;
                }

                correctAnswersStore.set(correctAnswers);
                navigate('/result');
                break;
        }

        console.log(correctAnswers);
        currentQuestionIndex++;
    }

</script>

<style>
    .cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    select {
        display: block;
        width: 300px;
        margin-bottom: 20px;
    }
</style>

{#if currentQuestionIndex === 1}
    <div class="cont">
        <h2>{currentQuestionIndex}. Сколько месяцев в году ?</h2>
        <select bind:value={selectedAnswer} name="months">
            <option value="1">24</option>
            <option value="2">1000-7</option>
            <option value="3">12</option>
            <option value="4">ыы</option>
        </select>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

{#if currentQuestionIndex === 2}
    <div class="cont">
        <h2>{currentQuestionIndex}. Какого цвета небо ?</h2>
        <select bind:value={selectedAnswer} name="months">
            <option value="1">Серо-буро-малиновое</option>
            <option value="2">Голубое</option>
            <option value="3">Цвета вина</option>
            <option value="4">хабиби хабиби хамуд, хамуда хабиби</option>
        </select>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

{#if currentQuestionIndex === 3}
    <div class="cont">
        <h2>{currentQuestionIndex}. Где живет губка боб квадратные штаны ?</h2>
        <select bind:value={selectedAnswer} name="months">
            <option value="1">На луне</option>
            <option value="2">На бебре</option>
            <option value="3">Синий</option>
            <option value="4">В океане</option>
        </select>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

{#if currentQuestionIndex === 4}
    <div class="cont">
        <h2>{currentQuestionIndex}. Какие теги есть в html ?</h2>

        <div>
            <label for="1">Бебра жесткая</label>
            <input type="checkbox" name="1" bind:checked={checkbox1}>
        </div>
        <div>
            <label for="2">body</label>
            <input type="checkbox" name="2" bind:checked={checkbox2}>
        </div>
        <div>
            <label for="3">babanchick</label>
            <input type="checkbox" name="3" bind:checked={checkbox3}>
        </div>
        <div>
            <label for="4">h1</label>
            <input type="checkbox" name="4" bind:checked={checkbox4}>
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>

{/if}

{#if currentQuestionIndex === 5}
    <div class="cont">
        <h2>{currentQuestionIndex}. Зачем нужны пальцы на ногах ?</h2>

        <div>
            <label for="1">хз</label>
            <input type="checkbox" name="1" bind:checked={checkbox1}>
        </div>
        <div>
            <label for="2">ну типа баланс держать</label>
            <input type="checkbox" name="2" bind:checked={checkbox2}>
        </div>
        <div>
            <label for="3">потому что наши предки лазали по деревьям</label>
            <input type="checkbox" name="3" bind:checked={checkbox3}>
        </div>
        <div>
            <label for="4">margin-top: 10px;</label>
            <input type="checkbox" name="4" bind:checked={checkbox4}>
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>

{/if}

{#if currentQuestionIndex === 6}
    <div class="cont">
        <h2>{currentQuestionIndex}. Где используется батарейки ?</h2>

        <div>
            <label for="1">В попке</label>
            <input type="checkbox" name="1" bind:checked={checkbox1}>
        </div>
        <div>
            <label for="2">да</label>
            <input type="checkbox" name="2" bind:checked={checkbox2}>
        </div>
        <div>
            <label for="3">Ну типа телефон да</label>
            <input type="checkbox" name="3" bind:checked={checkbox3}>
        </div>
        <div>
            <label for="4">Деееспасито чето там немандарито</label>
            <input type="checkbox" name="4" bind:checked={checkbox4}>
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>

{/if}

{#if currentQuestionIndex === 7}
    <div class="cont">
        <h2>{currentQuestionIndex}. Столица Китая?</h2>
        <div>
            <label for="option1">聚会</label>
            <input type="radio" bind:group={selectedAnswer} value="1" name="answer">
        </div>
        <div>
            <label for="option2">驼鹿</label>
            <input type="radio" bind:group={selectedAnswer} value="2" name="answer">
        </div>
        <div>
            <label for="option3">北京</label>
            <input type="radio" bind:group={selectedAnswer} value="3" name="answer">
        </div>
        <div>
            <label for="option4">毛泽东</label>
            <input type="radio" bind:group={selectedAnswer} value="4" name="answer">
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

{#if currentQuestionIndex === 8}
    <div class="cont">
        <h2>{currentQuestionIndex}. Поставишь линуху ? </h2>
        <div>
            <label for="option1">Нет</label>
            <input type="radio" bind:group={selectedAnswer} value="1" name="answer">
        </div>
        <div>
            <label for="option2">Мб</label>
            <input type="radio" bind:group={selectedAnswer} value="2" name="answer">
        </div>
        <div>
            <label for="option3">УЖЕ БЕГУ!!</label>
            <input type="radio" bind:group={selectedAnswer} value="3" name="answer">
        </div>
        <div>
            <label for="option4">Ну так уж и быть</label>
            <input type="radio" bind:group={selectedAnswer} value="4" name="answer">
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

{#if currentQuestionIndex === 9}
    <div class="cont">
        <h2>{currentQuestionIndex}. Из чего делают носки ? </h2>
        <div>
            <label for="option1">Из пупырок, очевидно</label>
            <input type="radio" bind:group={selectedAnswer} value="1" name="answer">
        </div>
        <div>
            <label for="option2">Хлопок</label>
            <input type="radio" bind:group={selectedAnswer} value="2" name="answer">
        </div>
        <div>
            <label for="option3">Лён</label>
            <input type="radio" bind:group={selectedAnswer} value="3" name="answer">
        </div>
        <div>
            <label for="option4">ЫЫЫАА!!</label>
            <input type="radio" bind:group={selectedAnswer} value="4" name="answer">
        </div>

        <button on:click={goToNextQuestion}>Далее</button>
    </div>
{/if}

