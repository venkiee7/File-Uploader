import React from 'react';
import { useState, useEffect } from 'react';
import FileUploadScreen from './FileUploadScreen';
import { getSingleFiles } from '../data/api';


export const Home = () => {
    const [singleFiles, setSingleFiles] = useState([]);

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleFileslist();
    }, []);


    return (
        <div>
            <FileUploadScreen getsingle={() => getSingleFileslist()}/>
            {/* <img src="./images/clock.jpg" alt="" /> */}
        </div>
    )
}

export default Home