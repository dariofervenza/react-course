# Section 1

# Create a new react project

Type in your browser: react.new


Options:

```sh
npx create-react-app myapp

npm create vite@latest
pnpm create vite@latest



# afterwards run:

npm install

npm run dev  # start local server
```


Each chapter will provide its own .zip file with the base used as starting point though


We need all this setup because of this html in js synthat which is called "jsx" which has to be compiled to normal html and js.

Because if we send it to the browser it wil fail and raise an error, the page will not show.

Also the code has to be optimized (eg remove white spaces) so it weights the minimum and the transfer to the browser is the most efficient transfer possible



```jsx

const App = () => {
    <div>
        Im a jsx file!
    </div>
}
```
