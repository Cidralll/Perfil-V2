import Header from "@/components/header/header";
import styles from "./page.module.scss";
import HeaderMargin from "@/components/headerMargin/headerMargin";
import ProfileBanner from "@/components/profileBanner/profileBanner";
import CurrentDate from "@/components/currentDate/currentDate";
import Posts from "@/components/posts/posts";
import Footer from "@/components/footer/footer";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <HeaderMargin />
      <ProfileBanner />
      <section className={styles.section}>
        <div className={styles.center}>
          <div className={styles.line} />
          <CurrentDate />
          <Posts />
        </div>
      </section>
      <Footer />
    </main>
  );
}
