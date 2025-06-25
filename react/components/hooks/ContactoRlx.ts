import { useState, useCallback, useEffect } from 'react';

interface HorariosMap {
  [key: number]: string;
}

interface UseHorarioReturn {
  horario: string;
  isOpen: boolean;
  toggleHorario: () => void;
}

const useHorario = (): UseHorarioReturn => {
  const [horario, setHorario] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const date = new Date();
    const day: number = date.getDay();

    const horarios: HorariosMap = {
      0: '11:00am - 04:00pm', // Domingo
      1: '10:00am - 08:00pm', // Lunes
      2: '10:00am - 08:00pm', // Martes
      3: '10:00am - 08:00pm', // Miércoles
      4: '10:00am - 08:00pm', // Jueves
      5: '10:00am - 08:00pm', // Viernes
      6: '10:00am - 08:00pm', // Sábado
    };

  
    if (horarios[day]) {
      setHorario(horarios[day]);
    } else {
      setHorario("Horario no disponible"); 
    }
  }, []); 
  const toggleHorario = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []); 

  return { horario, isOpen, toggleHorario };
};

export default useHorario;