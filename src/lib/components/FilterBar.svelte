<script lang="ts">
  export let value: string = '';
</script>

<div class="filter-bar">
  <input
    type="text"
    placeholder="Buscar cartas por nome, set ou tipo..."
    bind:value
    class="search-input"
  />
</div>

<style>
  .filter-bar {
    padding: 16px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .search-input {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 30px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .search-input:focus {
    border-color: #667eea;
  }
</style>