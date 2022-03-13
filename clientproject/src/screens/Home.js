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
            <FileUploadScreen getsingle={() => getSingleFileslist()} />
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-6">
                  <h4 className="text-success font-weight-bold">Single Files List</h4>
                  <div className="row">
                    {singleFiles.map((file, index) =>
                      <div className="col-6">
                        <div className="card mb-2 border-0 p-0">
                          <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Home