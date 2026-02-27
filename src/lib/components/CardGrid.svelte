<script lang="ts">
  import type { PokemonCard } from '$lib/types';
  import CardItem from './CardItem.svelte';
  
  export let cards: PokemonCard[];
  export let filter: string = '';
  
  $: filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(filter.toLowerCase()) ||
    card.set.toLowerCase().includes(filter.toLowerCase()) ||
    card.type.toLowerCase().includes(filter.toLowerCase())
  );
</script>

<div class="grid-container">
  {#if filteredCards.length === 0}
    <p class="no-results">Nenhuma carta encontrada 😢</p>
  {:else}
    <div class="grid">
      {#each filteredCards as card (card.id)}
        <CardItem {card} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .grid-container {
    width: 100%;
    padding: 16px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }
  
  .no-results {
    text-align: center;
    color: #666;
    font-size: 1.2rem;
    padding: 40px;
  }
  
  @media (max-width: 640px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }
</style>