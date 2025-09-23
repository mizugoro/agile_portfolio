
  # ポートフォリオサイト

  This is a code bundle for ポートフォリオサイト. The original project is available at https://www.figma.com/design/LvwkM0eV3AvAEOztbna9td/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%82%B5%E3%82%A4%E3%83%88.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.


  # 作成手順
  
  ## 1. Reactアプリ立ち上げ
  Node.jsとnpmの確認
```
$ node -v
$ npm -v
```

インストールされていない場合はインストール<br>
まずはReact + Viteでプロジェクトを作成し、開発

```
npm create vite@latest プロジェクト名 -- --template react
cd プロジェクト名
npm install
npm run dev
```

  ### 1.2 Vite設定を変更
  vite.config.jsにbaseを設定
  ```
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react_todo_list/', 
  plugins: [react()],
})
  ```
  react_todo_listの部分を作成したプロジェクト名で設定

  ## 2. Github Pages
  Githubのリポジトリページを開く
  設定タブから左側の「Pages」をクリック

  ## 3. React Build
  以下を実行して、本番用に静的ファイルを生成する

  ```
  npm run build
  ```

  ## 4. Figma AIを用いたプロトタイプ作成
  ## 5. 参考サイト
  - Viteで作成したReactアプリをGitHub Pagesにデプロイする
  https://zenn.dev/otaki0413/articles/react-deploy-github-pages
  - React + Vite アプリを GitHub Pages にデプロイする方法
  https://qiita.com/shugo1125/items/76979e6a7974bbd32ce3