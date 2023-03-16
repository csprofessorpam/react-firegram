import React from 'react'

function UploadForm() {

    const [file, setFile] = React.useState(null)

    const [error, setError] = React.useState(null)

    //allowed types
    const types=['image/png', 'image/jpeg']

    const changeHandler = (e) =>{
        console.log('changed')
        //access file that was selected
        let fileSelected = e.target.files[0]
        console.log(fileSelected)
        if(fileSelected && types.includes(fileSelected.type)){
            //store in state only if something selected
            setFile(fileSelected)
            setError("")
            //check filetype
        }
        else{
            setFile(null)
            setError('Please select an image file (png or jpeg)')

        }
    }

  return (
    <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
            {
                error && <div className="error">{error}</div>
            }
            {
                file && <div>{file.name}</div>
            }
        </div>
    </form>
  )
}

export default UploadForm