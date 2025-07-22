document.querySelectorAll('.nav-menu li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    item.classList.add('active');
    const targetId = item.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});