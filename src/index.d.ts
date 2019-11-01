import { FunctionComponent } from "react";
interface SimpleFileUploadProps {
    name?: string;
    multiple?: boolean;
    onChange: (file?: File) => void;
}
declare const SimpleFileUpload: FunctionComponent<SimpleFileUploadProps>;
export default SimpleFileUpload;