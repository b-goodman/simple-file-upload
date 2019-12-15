# simple-file-upload

A very simple React component implementing the HTML5 File API using a file-type input.

## Installation

```bash
npm install @bgoodman/simple-file-upload

yarn add @bgoodman/simple-file-upload
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

## Props

### `onChange`

Callback arg delivers either last committed `File` by user or `undefined` otherwise

 ```typescript
 onChange: (file?: File) => void;
 ```

### `accpet`

Provide an array of filetypes or extensions allowed.

```typescript
accept?: string[];
```

## `className`

Provide a css class name to override default styles.

```typescript
className?: string;
```

## Testing

### Storybook

Begin preview with

```bash
yarn storybook
```
