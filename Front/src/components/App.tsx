import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './UI/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './UI/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack } from '@mui/material';


function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header />
                <Routes>
                    <Route path="/" element={<Stack sx={{ mt: "90px" }} >Домой</Stack>} />
                    <Route path="/services" element={<Stack sx={{ mt: "90px" }} >Сервисы</Stack>} />
                    <Route path="/customsoftware" element={<Stack sx={{ mt: "90px" }} >ПО</Stack>} />
                    <Route path="/mobileapps" element={<div>Мобильное приложение</div>} />
                    <Route path="/websites" element={<div>Сайты</div>} />
                    <Route path="/revolution" element={<Stack sx={{ mt: "90px" }} >Революция</Stack>} />
                    <Route path="/about" element={<div><Stack sx={{ mt: "90px" }} >О нас</Stack></div>} />
                    <Route path="/contacts" element={<Stack sx={{ mt: "90px" }} >Контакты</Stack>} />
                    <Route path="/estimate" element={<div>Оценка</div>} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
