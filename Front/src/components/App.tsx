import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './UI/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './UI/Theme';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
  );
}

export default App;
