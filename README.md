# simple-file-upload

A very simple React component implementing the HTML5 File API using a file-type input.

## Installation

```bash
npm install simple-file-upload

yarn add simple-file-upload
```

## Usage

```typescript
import SimpleFileUpload from "simple-file-upload";
```

```tsx
const App: FunctionComponent<{}> = () => {

    const handleChange = (file?:File) => {
        console.log(file);
    }

    return (
        <SimpleFileUpload onChange={handleChange}/>
    )
}
```
