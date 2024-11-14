import { useState } from 'react';
import Root from './routes/root';
import Tambah from './routes/tambah';

export default function App() {
    const [currentPage, setCurrentPage] = useState('root');

    return (
        <>
        {currentPage === 'root' && <Root changePage={setCurrentPage} />}
        {currentPage === 'tambah' && <Tambah changePage={setCurrentPage} />}
        </>
    );
}
