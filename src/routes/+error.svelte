<script>
  import { page } from '$app/stores';
</script>

<div style="display: flex; justify-content: center;">
  <div style="display: flex; flex-direction: column; justify-content: center; color: var(--off-white); min-width: 30%; margin-top: 1%; font-size: 1.2em">
    <h1 style="margin-bottom: 3rem;">Blast! An error! <span style="font-style:italic; font-weight: 400; font-size: 0.8em; margin-left: 2rem">{$page.status} {$page.error.message}</span></h1>
    <p>Error is boundless.</p>
    <p>Nor hope nor doubt,</p>
    <p>Though both be groundless,</p>
    <p>Will average out.</p>
    <p style="font-weight: 500; margin-top: 3rem;">BY J.V. CUNNINGHAM, FROM "MEDITATION ON STATISTICAL METHOD"</p>
    <p style="margin-top: 2rem; font-size: 1em;">We can’t find the page you’re looking for. Please double check the URL in the browser's address bar.</p>
    <p style="font-size: 0.75em;">This is the content of the Poetry Foundation's 404 page. I just love it so much that I couldn't help but reproduce it.</p>
  </div>
</div>
