import { toast } from 'react-toastify';
import { useTheme } from './contexts/ThemeProvider';

const { theme } = useTheme();

export const Alert = (type:string,txt:string) => {
    switch (type) {
        case 'error':
                toast.error(
                    txt, 
                    {
                        position: 'top-center',
                        theme: theme
                    }
                );
            break;
        case 'warning':
            toast.warning(
                txt, 
                {
                    position: 'top-center',
                    theme: theme
                }
            );
            break;
        case 'success' :
            toast.success(
                txt, 
                {
                    position: 'top-center',
                    theme: theme,
                    autoClose: 1300
                }
            );
            break;
    
        default:
            //info

            break;
    }

};