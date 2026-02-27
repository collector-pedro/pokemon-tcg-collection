<script lang="ts">
  import { onMount } from 'svelte';
  import CardGrid from '$lib/components/CardGrid.svelte';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import type { PokemonCard } from '$lib/types';
  
  let cards: PokemonCard[] = [];
  let filterText = '';
  let selectedSet = 'all';
  
  onMount(async () => {
    // Aqui você carregará seus dados
    // Pode ser de um arquivo JSON ou API
    cards = [
      {
        id: 'base-charizard-4',
        name: 'Charizard',
        set: 'Base Set',
        setNumber: '4/102',
        rarity: 'Rare',
        type: 'Fire',
        hp: 120,
        imageUrl: '/images/base-set/charizard.jpg',
        owned: true,
        quantity: 1
      },
      // Adicione mais cartas aqui
    ];
  });
</script>

<main>
  <header class="hero">
    <h1>Minha Coleção Pokémon TCG</h1>
    <p class="subtitle">Base Set • Fossil • Jungle • e mais!</p>
    <div class="stats">
      <span>Total: {cards.length}</span>
      <span>•</span>
      <span>Na coleção: {cards.filter(c => c.owned).length}</span>
    </div>
  </header>
  
  <FilterBar bind:value={filterText} />
  
  <CardGrid cards={cards} filter={filterText} />
</main>

<style>
  .hero {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    margin-bottom: 20px;
  }
  
  .hero h1 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 800;
  }
  
  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin: 10px 0;
  }
  
  .stats {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 1.1rem;
    margin-top: 20px;
  }
  
  @media (max-width: 640px) {
    .hero h1 {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
  }
</style>