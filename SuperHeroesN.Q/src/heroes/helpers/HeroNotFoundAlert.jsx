import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const HeroNotFoundAlert = () => {
    const navigate = useNavigate();

    Swal.fire({
        title: '¡¡Héroe No encontrado!!',
        text: "El Héroe No existe. ¿Deseas volver?",
        icon: 'Error',
        showCancelButton: true,
        confirmButtonText: 'Ir a Animes',
        cancelButtonText: 'Ir a Comics'
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/animes');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate('/comics');
        }
    });

    return null; 
};
