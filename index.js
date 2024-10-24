<script>
  // Seleciona o botão hamburguer e o menu de navegação
  const menuButton = document.querySelector('.menu-button'); // O botão hamburguer
  const menuList = document.querySelector('.menu__list'); // O menu de navegação principal

  // Adiciona um evento de clique ao botão hamburguer
  menuButton.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    menuList.classList.toggle('active');
    // Alterna a classe 'active' no próprio botão para a animação
    menuButton.classList.toggle('active');
  });

  // Fecha o menu quando qualquer link do menu for clicado
  const menuLinks = document.querySelectorAll('.menu__item a'); // Todos os links do menu

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove a classe 'active' do menu para ocultá-lo
      menuList.classList.remove('active');
      // Remove a classe 'active' do botão para resetar a animação
      menuButton.classList.remove('active');
    });
  });
</script>
