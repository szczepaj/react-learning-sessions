import React, { useState } from 'react'
import axios from 'axios'
import {useForm} from "react-hook-form";

// 1. Wersja podstawowa
// export const FileInput = () => {
//     const [file, setFile] = useState(null)
//     const onFileUpload = (e) => {
//         const uploadedFile = e.target.files[0]
//         setFile(uploadedFile)
//
//         const formData = new FormData()
//         formData.set('file', uploadedFile)
//
//         // axios.post('/upload-file', formData) // 404
//     }
//
//     return (
//         <div>
//             <div>Upload a file</div>
//             <input type={'file'} onChange={onFileUpload} />
//             {file && <span>You just uploaded {file.name}</span>}
//         </div>
//     )
// }

// 2. Wersja hook form
// export const FileInput = () => {
//     const { register, handleSubmit } = useForm()
//
//     const onSubmit = data => console.log(data)
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>Upload a file</div>
//                 <input type={'file'} {...register('fileInput')} />
//                 <input type={'submit'} />
//             </form>
//         </div>
//     )
// }

// 3. Wyswietlanie uploadowanego zdjecia

export const FileInput = () => {
    const [uploadedImg, setUploadedImage] = useState(null)
    const onFileUpload = (e) => {
        const uploadedFile = e.target.files[0]
        if(uploadedFile.name.endsWith('jpeg') || uploadedFile.name.endsWith('jpg')) {
            const imageUrl = URL.createObjectURL(uploadedFile)
            console.log(imageUrl)
            setUploadedImage(imageUrl)
        }

        // const formData = new FormData()
        // formData.set('file', uploadedFile)

        // axios.post('/upload-file', formData) // 404
    }

    return (
        <div>
            <div>Upload a file</div>
            <input type={'file'} onChange={onFileUpload} />
            {uploadedImg && <img src={uploadedImg} />}
        </div>
    )
}