interface CotizacionData {
    nombre: string;
    email: string;
    mensaje: string;
}

// Add this at the beginning of your file
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        navLinks?.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizacionForm') as HTMLFormElement;
    
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement).value;
        
        const cotizacion: CotizacionData = {
            nombre,
            email,
            mensaje
        };
        
        enviarCotizacion(cotizacion);
    });
});

function enviarCotizacion(data: CotizacionData): void {
    // Aquí puedes implementar la lógica para enviar la cotización
    console.log('Cotización recibida:', data);
    alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar el formulario
    (document.getElementById('cotizacionForm') as HTMLFormElement).reset();
}