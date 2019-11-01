import { FunctionComponent } from 'react';

interface SimpleFileUploadProps {
    name?: string;
    multiple?: boolean;
    accept?: string[];
    className?: string;
    onChange: (file?: File) => void;
}
declare const SimpleFileUpload: FunctionComponent<SimpleFileUploadProps>;

export default SimpleFileUpload;
