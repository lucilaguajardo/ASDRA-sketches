const $ = (x) => document.querySelector(x);

$('#easy-text-checkbox').addEventListener('click', () => {
    if ($('#easy-text-checkbox').checked) {
            $('#classic-text-container').classList.add('hidden');
            $('#easy-text-container').classList.remove('hidden');
            $('#easy-text-button').innerHTML = 'Activar lectura clásica';
    } else {
            $('#classic-text-container').classList.remove('hidden');
            $('#easy-text-container').classList.add('hidden');
            $('#easy-text-button').innerHTML = 'Activar lectura fácil';
}});