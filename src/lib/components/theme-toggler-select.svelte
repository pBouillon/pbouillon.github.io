<script lang="ts">
  import { t } from '$lib/translations';
</script>

<select data-choose-theme class="select select-ghost w-full max-w-xs">
  <option value="corporate">{$t('navbar.themes.light')}</option>
  <option value="dark">{$t('navbar.themes.dark')}</option>
</select>
