### Netlify build
Add the file netlify.toml in the root of the project with the following content: 
```
[build]
    command = "npm ci && npm run build"
```    

in the package.json file replace 
`"build": "next build",`
with
`"build": "prisma generate && next build",`



