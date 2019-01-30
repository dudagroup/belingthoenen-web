// Handle Events on Archive-Thumb-Lists and Archive-Project-Description
// Thumbs have click/touchend event listeners that toggle visibility of description modal.
// A visible description modal has a one-time click/touchend event listener that makes it disapear.

const archive = document.querySelectorAll('.archive-project');

for (let i = 0; i < archive.length; i++ ) {
  let archiveProject = archive[i];
  console.log('project: ' + archiveProject);
  archiveProject.addEventListener('click' || 'touchend', (e) => {
    console.log('target: ' + e.target);
    let description = archiveProject.querySelector('.archive-project-description');
    description.classList.remove('hidden');
    window.setTimeout(() => description.classList.add('hidden'), 400 );
    // description.addEventListener('click' || 'touchend', (e) => {
    //   console.log(description);
    //   description.classList.add('hidden');
    // }, {once: true});
  });
}

