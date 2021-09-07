import { createTheme } from "@material-ui/core/styles";
import * as locales from '@material-ui/core/locale';

const theme = createTheme({
    typography: {
        fontFamily: 'cursive'
    }
}, locales['hiIN']);

export default theme;