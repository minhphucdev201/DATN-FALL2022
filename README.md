## cài đặt dự án

- cài thư viện node_module: sử dụng lệnh yarn install
- chạy lệnh với cú pháp: yarn start http://localhost:3000

### Cấu trúc thư viện

```
src
|__ components (shared components between features)
|  |__Loading
|  |  |__ index.jsx
|  |  |__ styles.scss
|  |__Header
|  |  |__ index.jsx
|  |  |__ styles.scss
|  |__Footer
|  |  |__ index.jsx
|  |  |__ styles.scss
|  |__SideBar
|     |__ index.jsx
|     |__ styles.scss
|__ features
|  |__ Product
|     |__ components (components of feature Product)
|     |__ pages (pages of feature Product)
|     |__ index.jsx (entry point of feature Product)
|
|__ App.js
```
