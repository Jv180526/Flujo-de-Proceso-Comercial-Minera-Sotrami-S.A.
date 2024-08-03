// Aquí puedes agregar funcionalidades adicionales si es necesario
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada y script.js funcionando correctamente.");
    // Ejemplo de funcionalidad adicional
    // Mostrar alerta cuando se hace clic en cualquier paso del proceso
    const steps = document.querySelectorAll('.step-content');
    steps.forEach(step => {
        step.addEventListener('click', function() {
            const def = document.querySelector(this.getAttribute('data-target'));
            def.classList.toggle('collapse');
        });
    });

    const activities = document.querySelectorAll('.step-details div');
    activities.forEach(activity => {
        activity.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            target.classList.toggle('collapse');
        });
    });
});
