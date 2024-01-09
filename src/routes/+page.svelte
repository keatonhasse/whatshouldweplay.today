<script>
  import { enhance } from "$app/forms";

  export let data;
  //export let form;
</script>

<form method="POST" action="?/getOwnedGames" use:enhance>
  <label>
    enter steamid, name, or url:
    <input type="text" name="input" autocomplete="off" required />
  </label>
  <!-- <input
    type="text"
    name="steamid"
    placeholder="steamid"
    autocomplete="off"
    required
  /> -->
  <input type="submit" />
</form>

{#if data?.success}
  <p>{data.steamid}</p>
  {#each data.games as game}
    <p>{game.name}</p>
  {/each}
{/if}
