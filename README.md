
## NEXT JS 세팅

npx create-next-app "이름"


```bash
npm run dev
```


## 라우팅 

Pages 폴더에 자바스크립트 추가 후

<img src="https://user-images.githubusercontent.com/52130444/188378063-61ccdf29-197c-4104-a6e6-520b61e2d8b9.png"><img/>

=>하위 폴더 생성하면 확실한 세분화 가능 



```bash
import Link from "next/Link";
=> Link 태그 사용시 필수


<form>
      <Link href={"/about/about_1"}>어바웃1</Link>
      <Link href={"/about/about_2"}>어바웃2</Link>

</form>


```
