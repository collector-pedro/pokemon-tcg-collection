<script lang="ts">
  import type { PokemonCard } from '$lib/types';
  
  export let card: PokemonCard;
  
  let isHovered = false;
</script>

<button 
  class="card"
  class:hovered={isHovered}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  aria-label={`Carta ${card.name}`}
>
  <div class="image-container">
    <img 
      src={card.imageUrl} 
      alt={card.name}
      loading="lazy"
    />
    {#if card.owned}
      <span class="owned-badge">
        {card.quantity > 1 ? `×${card.quantity}` : '✓'}
      </span>
    {/if}
  </div>
  
  <div class="info">
    <h3>{card.name}</h3>
    <p class="number">{card.setNumber}</p>
    <p class="rarity" data-rarity={card.rarity}>
      {card.rarity}
    </p>
  </div>
</button>

<style>
  .card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    border: none;
    width: 100%;
    padding: 0;
    text-align: left;
  }
  
  .card.hovered {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
  
  .image-container {
    position: relative;
    padding-top: 140%;
    background: linear-gradient(145deg, #f5f5f5, #e8e8e8);
  }
  
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .owned-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: white;
    border-radius: 20px;
    padding: 4px 8px;
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .info {
    padding: 12px;
  }
  
  .info h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
  
  .number {
    margin: 4px 0;
    font-size: 0.8rem;
    color: #666;
  }
  
  .rarity {
    margin: 0;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .rarity[data-rarity="Rare"] { color: #FF6B6B; }
  .rarity[data-rarity="Uncommon"] { color: #4ECDC4; }
  .rarity[data-rarity="Common"] { color: #95A5A6; }
</style>