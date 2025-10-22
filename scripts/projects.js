// Fetch projects.json and render project cards into #projects-grid
async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '<p class="text-gray-500">Loading projects…</p>';
  try {
    const res = await fetch('projects.json', {cache: "no-store"});
    if (!res.ok) throw new Error('Could not fetch projects.json');
    const projects = await res.json();
    if (!Array.isArray(projects)) throw new Error('projects.json must be an array');
    if (projects.length === 0) {
      grid.innerHTML = '<p class="text-gray-500">No projects yet — edit <code>projects.json</code>.</p>';
      return;
    }
    grid.innerHTML = '';
    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card bg-white p-4 rounded-md shadow-sm border';
      card.innerHTML = `
        <h3 class="text-lg font-semibold"><a href="\${p.url || '#'}" target="_blank" class="hover:underline">\${p.title}</a></h3>
        <p class="text-sm text-gray-600 mt-2">\${p.description || ''}</p>
        <div class="mt-3 flex items-center gap-2 text-xs text-gray-500">
          <span>\${p.tech ? p.tech.join(' · ') : ''}</span>
          \${p.github ? `<a href="\${p.github}" target="_blank" class="ml-auto underline">Source</a>` : ''}
        </div>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    grid.innerHTML = '<p class="text-red-500">Failed to load projects.json — see console for details.</p>';
    console.error(err);
  }
}

document.getElementById('reload-projects').addEventListener('click', loadProjects);
loadProjects();