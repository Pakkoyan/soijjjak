<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Registry from "./components/Registry.svelte";
    import Questions from "./components/Questions.svelte";
    import Result from "./components/Result.svelte";
</script>

<main>
    <Router>
        <Route path="/" component={Registry}/>
        <Route path="/questions" component={Questions}/>
        <Route path="/result" component={Result}/>
    </Router>
</main>

<style>

</style>
