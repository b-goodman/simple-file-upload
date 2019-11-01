import React, {FunctionComponent, } from "react";
import CloseIcon from "./CloseIcon";
import UploadIcon from "./UploadIcon";
import style from "./index.scss";

interface SimpleFileUploadProps {
    name?: string;
    multiple?: boolean;
    onChange: (file?: File) => void;
}

  const SimpleFileUpload: FunctionComponent<SimpleFileUploadProps> = (props) => {

      const fileInput = React.useRef<HTMLInputElement>(null);
      const [file, setFile] = React.useState<File|undefined>(undefined);

      const handleNewFile = (fileList: FileList) => {
          const file = fileList[0];
          setFile(file);
          props.onChange(file);
      }

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          event.target.files ? handleNewFile(event.target.files) : null;
      }

      const cancelSelection = () => {
        console.log(fileInput.current)
          if (fileInput.current) {
              setFile(undefined);
              fileInput.current.value = "";
          }
      }

      return (
          <div className={style.fileInputModule}>
              <div className={style.fileInputWrapper}>

                  <button
                    className={style.btnFileInput}
                    disabled={!!file}
                  >
                    {file
                      ? <div className={style.uploadHint}><div>{file.name}</div></div>
                      : <div className={style.uploadHint}><div>Upload File</div> <UploadIcon/></div>
                    }
                  </button>

                  <input
                    ref={fileInput}
                    type="file"
                    name={props.name||"file"}
                    multiple={props.multiple||false}
                    disabled={!!file}
                    onChange={handleChange}
                  />
              </div>

              <div className={style.buttonRow} data-closed={!file}>
                <div id="cancel-btn">
                  <div
                        className={style.btnWrapper}
                        data-disable={!file}
                        onClick={cancelSelection}
                    >
                        <CloseIcon/>
                  </div>
                </div>
              </div>

          </div>
      );
}

export default SimpleFileUpload;
