import React from 'react';
import { Button } from '@storybook/react/demo';
import SimpleFileUpload from "../dist";

export default { title: 'Button' };



export const standard = () => {

    return <SimpleFileUpload onChange={(file) => {
        console.log(file);
    }}/>
}