import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

const Home = () => {
  return (
    <>
    <form>
       <Link href={"/test/test_1"}>테스트1</Link>
      <Link href={"/test/test_2"}>테스트2</Link>
      <Link href={"/test/test_3"}>테스트3</Link>
      <Link href={"/test/test_4"}>테스트4</Link>
    </form>

    <form>
      <Link href={"/about/about_1"}>어바웃1</Link>
      <Link href={"/about/about_2"}>어바웃2</Link>
    </form>
     
    </>
  );
};

export default Home;
