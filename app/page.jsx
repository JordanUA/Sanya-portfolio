import Image from 'next/image'

import styles from './page.module.scss'

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.home_page}>
        <nav id="site-nav" className={styles.nav_bar}>
          <ul className={styles.menu_primary}>

            <li id="menu-item-home">
              <a title="home" href="#site-nav">Home</a>
            </li>
            <li id="menu-item-about">
              <a title="about" href="#about">About</a>
            </li>
            <li id="menu-item-projects">
              <a title="projects" href="#projects">Projects</a>
            </li>
            <li id="menu-item-contact">
              <a title="contact" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.name_avatar}>

        <h1>Rudenko Oleksandr</h1>
        <h2>Front-end developer</h2>
        <p>I don`t know what to write here)))</p>
      </div>
      <div className={styles.avatar}>
       <Image width="250" height="250" src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" alt="Avatar image" />
      </div>
      <section className={styles.main}>
        <div className={styles.about_me}>
          <h2 id="about">ABOUT</h2>
          <div className={styles.text_about_me}>
            <p>I&apos;m an 18-year-old student at a very cool DUICT university who likes front-end and web development. This is my first portfolio, so I don&apos;t know what to write here)))</p>
          </div>
        </div>
        <div className={styles.projects}>
          <h2 id="projects">PROJECTS</h2>
          <p>My projects from the university</p>
        </div>
        <div className={styles.photo_projects}>
          <p><a href="https://github.com/JordanUA/frontbackjs">JS</a></p>
          <p>---------</p>
          <p><a href="https://github.com/JordanUA/frontlaba">Frontlaba</a></p>
        </div>
        <div className={styles.contacts}>
          <h2 id="contact">Contact</h2>
          <p></p>
        </div>
        <div className={styles.network}>
          <p>
            My number: +380666246274
          </p>
          <p>
            My telegram: @shyrik2474
          </p><p>
            My instagram: shyrik2474
          </p>
        </div>
      </section>


    </header>







  )
}
