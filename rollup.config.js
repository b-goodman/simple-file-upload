import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss-modules';
import typescript from 'rollup-plugin-typescript2';
import autoprefixer from 'autoprefixer';
import glob from 'glob';
import dts from "rollup-plugin-dts";



glob.sync('src/**/*.css').forEach((css) => {  // Use forEach because https://github.com/rollup/rollup/issues/1873
	const definition = `${css}.d.ts`
	if (!fs.existsSync(definition))
		fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n')
});

const externals = {
    external: ['react', 'react-dom'],
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}

const main = {
    input: './src/index.ts',
    sourcemap: true,
    targets: [
        {
            dest: './dist/index.mjs',
            format: 'es'
        },
        {
            dest: './dist/index.js',
            format: 'cjs'
        }
    ],
    plugins: [
        typescript(),
        postcss({
			plugins: [autoprefixer()],
			writeDefinitions: true,
            modules: true
        }),
        resolve(),
    ],
    ...externals
};

const ouptputTypes = {
    input: './src/index.d.ts',
    targets: [
        {
            file: 'dist/index.d.ts',
            format: 'es'
        }
    ],
    plugins: [
        dts()
    ],
    ...externals

};

export default [
    ouptputTypes,
    main,
];