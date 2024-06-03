//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const dropZones = document.querySelectorAll('.drop-zone');
  const unrankedZone = document.getElementById('unranked-drop-zone');
 items.forEach(item => {
    item.setAttribute('draggable', true);

    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
    });

    item.addEventListener('dblclick', () => {
      if (item.parentElement !== unrankedZone) {
        unrankedZone.appendChild(item);
      }
    });
  });

  dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(id);
      if (draggedElement && draggedElement.parentElement !== zone) {
        zone.appendChild(draggedElement);
      }
    });
  });
});